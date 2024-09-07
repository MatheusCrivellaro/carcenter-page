import './FormModalAprovar.css'
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {IoClose} from "react-icons/io5";
import {TbFaceId} from "react-icons/tb";
import {MdPhone} from "react-icons/md";
import {LuMail} from "react-icons/lu";
import {GoArrowRight} from "react-icons/go";

type FormData = {
    nome: string,
    telefone: string,
    email: string,
    mensagem: string
}

type props = {
    handleClose: () => void
}

const FormModalAprovar = ({ handleClose }:props) => {
    const {register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>()

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/form-concluido")
    }

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

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('telefone', formatPhone(e.target.value));
    };

    return (
        <div className="venda-form-input-div">
            <div className="title-modal-form">
                <h5>Simulação de Financiamento</h5>
                <button onClick={handleClose}><IoClose/></button>
            </div>

            <div className="input-venda-nome">
                <h3>Seu nome</h3>
                <div className={errors.nome ? "content-input-venda-error" : "content-input-venda "}>
                    <TbFaceId className="icon-input-venda"/>
                    <input type="text" className="input-venda-form-item"
                           placeholder="Digite aqui..." {...register("nome", {required: true})} />
                </div>
                {errors.nome?.type === "required" &&
                    <h4 className="input-venda-error-message">O Campo nome é obrigatório.</h4>}
            </div>
            <div className="input-venda-phone">
                <h3>Seu telefone</h3>
                <div className={errors.telefone ? "content-input-venda-error" : "content-input-venda "}>
                    <MdPhone className="icon-input-venda"/>
                    <input type="text" className="input-venda-form-item" placeholder="Digite aqui..."
                           {...register("telefone", {required: true})}
                           onChange={handlePhoneChange}
                    />
                </div>
                {errors.telefone?.type === "required" &&
                    <h4 className="input-venda-error-message">O Campo telefone é obrigatório.</h4>}
            </div>
            <div className="input-venda-email">
                <h3>Seu e-mail</h3>
                <div className={errors.email ? "content-input-venda-error" : "content-input-venda "}>
                    <LuMail className="icon-input-venda"/>
                    <input type="text" className="input-venda-form-item" placeholder="Digite aqui..."
                           {...register("email",
                               {
                                   required: true,
                                   pattern: {
                                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                       message: 'invalido'
                                   }
                               })}
                    />
                </div>
                {errors.email?.type === "required" &&
                    <h4 className="input-venda-error-message">O Campo email é obrigatório.</h4>}
                {errors.email?.message === "invalido" &&
                    <h4 className="input-venda-error-message">Esse não é um email valido</h4>}
            </div>
            <div className="input-venda-cpf">
                <h3>Mensagem</h3>
                <div className={errors.nome ? "content-input-venda-error" : "content-input-venda "}>
                    <TbFaceId className="icon-input-venda"/>
                    <input type="text" className="input-venda-form-item"
                           placeholder="Digite aqui..." {...register("mensagem", {required: true})} />
                </div>
                {errors.nome?.type === "required" &&
                    <h4 className="input-venda-error-message">O Campo mensagem é obrigatório.</h4>}
            </div>
            <div className="content-button-submit-form-venda">
                <button className="button-submit-form-venda" onClick={() => handleSubmit(onSubmit)()}>Enviar para
                    análise <GoArrowRight
                        className="icon-button-submit-form-venda"/></button>
            </div>
        </div>
    )
}

export default FormModalAprovar
