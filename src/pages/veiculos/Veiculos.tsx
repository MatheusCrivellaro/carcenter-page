import {useCallback, useEffect, useState} from "react";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import {Filters} from "../../interfaces/Filters.ts";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import './Veiculos.css';
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import ButtonFilterOrdenation from "../../components/ButtonFilterOrdenation/ButtonFilterOrdenation.tsx";
import {FilterConfig} from "../../interfaces/FilterConfig.ts";
import FiltroListGenerator from "../../components/FiltroListGenerator/FiltroListGenerator.tsx";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {motion} from "framer-motion";
import CardVeiculoPlacehoader from "../../components/CardVeiculoPlacehoader/CardVeiculoPlacehoader.tsx";


const Veiculos = () => {

    // const location = useLocation()
    // const { state } = location

    // const searchRef = useRef<HTMLInputElement>(null);

    const {data, isLoading} = useGetStock();
    const {marcas, cores, cambios, carrocerias, combustiveis} = useCollects(data)

    const [selectedColors, setSelectedColors] = useState<string>('todos');
    const [selectedMarcas, setSelectedMarcas] = useState<string>('todos');
    const [selectedCambios, setSelectedCambios] = useState<string>('todos');
    const [selectedCombustivel, setSelectedCombustivel] = useState<string>('todos');
    const [selectedCarroceria, setSelectedCarroceria] = useState<string>('todos');
    const [precoMin, setPrecoMin] = useState<string>('');
    const [precoMax, setPrecoMax] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');
    const [ordenation, setOrdenation] = useState<string>('')
    const [widthAtual, setWidthAtual] = useState(window.innerWidth);

    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
    const [filters, setFilters] = useState<Filters>({});
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const listFiltersConfig: FilterConfig[] = [
        {
            title: "Marcas",
            group: "marca",
            value: marcas,
            handle: (e) => updateFilter('marca', e.target.value, setSelectedMarcas),
            selected: selectedMarcas,
            todos: true
        },
        {
            title: "Cores",
            group: "cor",
            value: cores,
            handle: (e) => updateFilter('cor', e.target.value, setSelectedColors),
            selected: selectedColors,
            todos: true
        },
        {
            title: "Câmbio",
            group: "cambio",
            value: cambios,
            handle: (e) => updateFilter('cambio', e.target.value, setSelectedCambios),
            selected: selectedCambios,
            todos: true
        },
        {
            title: "Combustível",
            group: "combustivel",
            value: combustiveis,
            handle: (e) => updateFilter('combustivel', e.target.value, setSelectedCombustivel),
            selected: selectedCombustivel,
            todos: true
        },
        {
            title: "Carroceria",
            group: "carroceria",
            value: carrocerias,
            handle: (e) => updateFilter('carroceria', e.target.value, setSelectedCarroceria),
            selected: selectedCarroceria,
            todos: true
        }
    ]


    const updateFilter = useCallback((key: keyof Filters, value: string, setValue: (value: string) => void) => {
        setFilters((prevFilters) => ({...prevFilters, [key]: value}));
        setValue(value)
    }, [data])

    // [data]: isso da um warn, mas não duvide e nem questione, apenas aceite que esse é o certo a se fazer

    const sortVehicles = (vehicles: Vehicle[], typeOrdenacao?: string): Vehicle[] => {
        const sortFunctions: { [key: string]: (a: Vehicle, b: Vehicle) => number } = {
            "marca-modelo": (a, b) => a.marca.localeCompare(b.marca) || a.modelo.localeCompare(b.modelo),
            "ano-mais-novo": (a, b) => extractNumbers(b.anoFabricacao) - extractNumbers(a.anoFabricacao),
            "menor-km": (a, b) => extractNumbers(a.km) - extractNumbers(b.km),
            "menor-preco": (a, b) => extractNumbers(a.precoVenda) - extractNumbers(b.precoVenda),
            "maior-preco": (a, b) => extractNumbers(b.precoVenda) - extractNumbers(a.precoVenda),
        };

        return typeOrdenacao && sortFunctions[typeOrdenacao]
            ? vehicles.slice().sort(sortFunctions[typeOrdenacao])
            : vehicles;
    };

    const applyFilter = (useCallback(() => {
        if (data) {
            let result = data!.filter((vehicle) => {
                return (
                    (filters.cor === undefined || filters.cor === "todos" || vehicle.cor.toLowerCase() === filters.cor) &&
                    (filters.marca === undefined || filters.marca === "todos" || (vehicle.marca ? vehicle.marca.toLowerCase() : "") === filters.marca) &&
                    (filters.combustivel === undefined || filters.combustivel === "todos" || vehicle.combustivel.toLowerCase() === filters.combustivel) &&
                    (filters.carroceria === undefined || filters.carroceria === "todos" || vehicle.carroceria.toLowerCase() === filters.carroceria) &&
                    (filters.cambio === undefined || filters.cambio === "todos" || vehicle.cambio.toLowerCase() === filters.cambio) &&
                    (filters.precoMax === undefined || filters.precoMax === "" || extractNumbers(vehicle.precoVenda) < extractNumbers(filters.precoMax)) &&
                    (filters.precoMin === undefined || filters.precoMin === "" || extractNumbers(vehicle.precoVenda) > extractNumbers(filters.precoMin))
                );
            });
            result = sortVehicles(result, ordenation !== "" ? ordenation : filters.ordenacao);
            setFilteredVehicles(result);
            if (searchName !== "")
                setFilteredVehicles(data!.filter(vehicle => (vehicle.marca ? vehicle.marca.toLowerCase().includes(searchName.toLowerCase()) : false) || vehicle.modelo.toLowerCase().includes(searchName.toLowerCase())))
        }
    }, [data, filters.cambio, filters.carroceria, filters.combustivel, filters.cor, filters.marca, filters.ordenacao, filters.precoMax, filters.precoMin, ordenation, searchName, sortVehicles]))

    function extractNumbers(input: string): number {
        return parseFloat(input.replace(/\./g, '').replace(',', '.'))
    }

    const handleSelectedMarca = (value: string) => {
        updateFilter('marca', value, setSelectedMarcas)
    }

    const handlePrecoMinChange = (value: string) => {
        if (/^\d+$/.test(value) || value==="") {
            updateFilter('precoMin', value, setPrecoMin)
            setPrecoMin(value)
        }
    };

    const handlePrecoMaxChange = (value: string) => {
        if (/^\d+$/.test(value)) {
            updateFilter('precoMax', value, setPrecoMax)
            setPrecoMax(value)
        }
    };

    const handleUpdateClearFilters = () => {
        updateFilter('marca', "todos", setSelectedMarcas)
        updateFilter('cor', "todos", setSelectedColors)
        updateFilter('cambio', "todos", setSelectedCambios)
        updateFilter('carroceria', "todos", setSelectedCarroceria)
        updateFilter('combustivel', "todos", setSelectedCombustivel)
        updateFilter('precoMax', "", handlePrecoMinChange)
        updateFilter('precoMin', "", handlePrecoMaxChange)
        updateFilter('ordenacao', "relevancia", () => {
        })
    }

    useEffect(() => {
        if (data) {
            setFilteredVehicles(data);
            applyFilter()
        }
        window.addEventListener('resize', () => setWidthAtual(window.innerWidth));
        window.scrollTo(0, 0);
    }, [data, filters, ordenation, location.pathname]);

    return (
        <div>
            <ButtonSuspense />
            <div className={`veiculos ${isOpenFilter ? "veiculos-filter-open" : "veiculos-filter-close"}`}>
                <motion.div
                    animate={{
                        width: widthAtual > 992 ? (isOpenFilter ? '100%' : 0) : '100%',
                        opacity: isOpenFilter ? 1 : 0,
                        height: widthAtual < 992 ? (isOpenFilter ? '100%' : 0) : '100%'
                    }}
                    transition={{ duration: 0.1 }}
                    style={{ overflow: 'hidden' }}
                    className="veiculos-filtro"
                >
                    <div className="veiculos-filtro-div">
                        <h1 className="veiculos-filtro-div-title">Filtrar</h1>
                        <button className="veiculos-filtro-div-button" onClick={handleUpdateClearFilters}>Limpar</button>
                        <ButtonFilterOrdenation handle={setOrdenation} classeButton="veiculos-filtro-div-button" classeList=""/>
                    </div>
                    <div className="veiculos-filtro-div">
                        <h1 className="veiculos-filtro-div-title">Preço</h1>
                        <div className="veiculos-filtro-div-preco-input">
                            <span>De</span>
                            <input type="number" placeholder="R$0,00" max={precoMax} min={0} value={precoMin} onChange={(e) => handlePrecoMinChange(e.target.value)} />
                        </div>
                        <div className="veiculos-filtro-div-preco-input">
                            <span>Até</span>
                            <input type="number" placeholder="R$1.000.000,00" min={precoMin} value={precoMax} onChange={(e) => handlePrecoMaxChange(e.target.value)} />
                        </div>
                    </div>
                    <FiltroListGenerator filtros={listFiltersConfig} />
                </motion.div>
                <div className="veiculos-cards">
                    <CarouselCategorias marcas={marcas} handleSelectedMarca={handleSelectedMarca} isLoading={isLoading}/>
                    <div className="veiculos-cards-title">
                        <input type="text" placeholder="Busque por marca e modelo" onChange={(e) => setSearchName(e.target.value)} />
                        <div className="veiculos-cards-title-buttons">
                            <button className="button-primary" onClick={() => setIsOpenFilter(!isOpenFilter)}>Filtrar</button>
                            <ButtonFilterOrdenation handle={setOrdenation} classeButton="button-black"/>
                        </div>
                    </div>
                    <h1 className="veiculos-cards-encontrados"><span>{filteredVehicles.length}</span>veículos encontrados</h1>
                    <div className="veiculos-cards-items">
                        {
                            isLoading ?
                                <CardVeiculoPlacehoader quantidade={8} />
                                :
                                filteredVehicles.map((veiculo) => (
                                    <CardVeiculoEstoque veiculo={veiculo} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Veiculos

// < h2
// className = "cards-itens-div-none-veiculos-msg-desenho" >
// :
// (
// </h2>
// <h2 className="cards-itens-div-none-veiculos-msg">
//     Ops, não há veículos disponíveis para os filtros aplicados. Por favor, tente
//     outra
//     combinação de filtros
// </h2>
