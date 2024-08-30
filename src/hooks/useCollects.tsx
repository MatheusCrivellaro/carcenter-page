import {useEffect, useState} from "react";
import {Vehicle} from "../interfaces/Vehicle.ts";

const useCollects = (vehicles: Vehicle[] = []) => {
    const [marcas, setMarcas] = useState<string[]>([]);
    const [cores] = useState<string[]>([]);
    const [cambios] = useState<string[]>([]);
    const [carrocerias] = useState<string[]>([]);
    const [combustiveis] = useState<string[]>([]);

    const collectCores = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!cores.includes(vehicle.cor.toLowerCase()))
                cores.push(vehicle.cor.toLowerCase());
        })
    }

    const collectMarcas = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!marcas.includes(vehicle.marca.toLowerCase()))
                marcas.push(vehicle.marca.toLowerCase());
            setMarcas(marcas.sort((a, b) => a > b ? 1 : -1));
        })
    }

    const collectCambio = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!cambios.includes(vehicle.cambio.toLowerCase()))
                cambios.push(vehicle.cambio.toLowerCase());
        })
    }

    const collectCarrocerias = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!carrocerias.includes(vehicle.carroceria.toLowerCase()) && (vehicle.carroceria !== ''))
                carrocerias.push(vehicle.carroceria.toLowerCase());
        })
    }

    const collectCombustiveis = (vehicles: Vehicle[]) => {
        vehicles.forEach(vehicle => {
            if (!combustiveis.includes(vehicle.combustivel.toLowerCase()))
                combustiveis.push(vehicle.combustivel.toLowerCase());
        })
    }

    useEffect(() => {
        collectCores(vehicles)
        collectMarcas(vehicles)
        collectCambio(vehicles)
        collectCarrocerias(vehicles)
        collectCombustiveis(vehicles)
    }, [vehicles])

    return {
        cores,
        marcas,
        cambios,
        carrocerias,
        combustiveis
    }
}

export default useCollects
