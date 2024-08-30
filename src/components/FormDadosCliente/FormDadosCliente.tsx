import './FormDadosCliente.css'
import {IoDocumentTextOutline} from "react-icons/io5";
import {TbFaceId} from "react-icons/tb";
import {LuMail} from "react-icons/lu";
import {GoArrowRight} from "react-icons/go";
import {ChangeEvent, useState} from "react";
import {IoMdCalendar} from "react-icons/io";
import {MdOutlineAssignment, MdPhone} from "react-icons/md";

type props = {
    submit: (list: [...any]) => void,
    financiamento: boolean
}

const FormDadosCliente = ({ submit, financiamento }: props) => {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [dados, setDados] = useState("");
    const [wpp, setWpp] = useState<boolean>(false);
    const [cpf, setCpf] = useState("");
    const [data, setData] = useState("")

    const formatCpf = (value: string) => {
        value = value.replace(/\D/g, '');
        if (value.length > 11)
            value = value.slice(0, 11);
        return value
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    };

    const formatDate = (value: string): string => {
        value = value.replace(/\D/g, '');
        if (value.length > 8)
            value = value.slice(0, 8);
        if (value.length <= 8) {
            value = value.replace(/(\d{2})(\d)/, '$1/$2');
            value = value.replace(/(\d{2})(\d)/, '$1/$2');
        }
        return value.slice(0, 10);
    };

    const formatPhone = (value: string) => {
        value = value.replace(/\D/g, '');
        if (value.length > 11)
            value = value.slice(0, 11);
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        return value.slice(0, 15);
    };

    const handleChangeCpf = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCpf(e.target.value);
        setCpf(formattedValue)
    }

    const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatDate(e.target.value);
        setData(formattedValue)
    }

    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhone(e.target.value);
        setTelefone(formattedValue)
    }

    return (
        <div className="venda-form-input-div">
            <div className="input-venda-dados">
                <h3>Dados do seu veículo</h3>
                <div className="content-input-venda">
                    <IoDocumentTextOutline className="icon-input-venda"/>
                    <input type="text" placeholder="Digite aqui..." className="input-venda-form-item" value={dados}
                           onChange={(e) => setDados(e.target.value)}/>
                </div>
                <p>Descreva o seu veículo. </p>
                <p>Exemplo: Toyota Corola 2017...</p>
            </div>
            <div className="input-venda-nome">
                <h3>Seu nome</h3>
                <div className="content-input-venda">
                    <TbFaceId className="icon-input-venda"/>
                    <input type="text" placeholder="Digite aqui..." className="input-venda-form-item" value={nome}
                           onChange={(e) => setNome(e.target.value)}/>
                </div>
            </div>
            <div className="input-venda-phone">
                <h3>Seu telefone</h3>
                <div className="content-input-venda">
                    <MdPhone className="icon-input-venda"/>
                    <input type="text" placeholder="Digite aqui..." className="input-venda-form-item" value={telefone}
                           onChange={handleChangePhone}/>
                </div>
                <div className="check-input-phone-div">
                    <input type="checkbox" onClick={() => setWpp(!wpp)}/>
                    <p>Este telefone é WhatsApp</p>
                </div>
            </div>
            <div className="input-venda-email">
                <h3>Seu e-mail</h3>
                <div className="content-input-venda">
                    <LuMail className="icon-input-venda"/>
                    <input type="text" placeholder="Digite aqui..." className="input-venda-form-item" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            {financiamento &&
                (
                    <>
                        <div className="input-venda-email">
                            <h3>Sua Data de Nascimento (Opcional)</h3>
                            <div className="content-input-venda">
                                <IoMdCalendar className="icon-input-venda"/>
                                <input type="text" placeholder="Digite aqui..." className="input-venda-form-item"
                                       value={data}
                                       onChange={handleChangeDate}/>
                            </div>
                        </div>
                        <div className="input-venda-email">
                            <h3>Seu CPF (Opcional)</h3>
                            <div className="content-input-venda">
                                <MdOutlineAssignment className="icon-input-venda"/>
                                <input type="text" placeholder="Digite aqui..." className="input-venda-form-item"
                                       value={cpf}
                                       onChange={handleChangeCpf}/>
                            </div>
                        </div>
                    </>
                )
            }
            <div className="content-button-submit-form-venda">
                <button className="button-submit-form-venda"
                        onClick={() => financiamento ? submit([nome, dados, telefone, wpp, email, cpf, data]) : submit([nome, dados, telefone, wpp, email])}>Enviar para análise <GoArrowRight
                    className="icon-button-submit-form-venda"/></button>
            </div>
        </div>
    )
}

export default FormDadosCliente
