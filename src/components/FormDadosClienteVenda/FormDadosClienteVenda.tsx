import './FormDadosClienteVenda.css'
import {IoDocumentTextOutline} from "react-icons/io5";
import {TbFaceId} from "react-icons/tb";
import {LuMail} from "react-icons/lu";
import {GoArrowRight} from "react-icons/go";
import {MdPhone} from "react-icons/md";
import {useForm} from "react-hook-form";
import {usePostMail} from "../../hooks/usePostMail.tsx";
import {useNavigate} from "react-router-dom";
import {IMaskInput} from "react-imask";

type FormData = {
    dados: string
    nome: string,
    telefone: string,
    isWhatsapp: boolean,
    email: string,
}

const FormDadosClienteVenda = () => {

    const {register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>()

    const { mutate } = usePostMail()
    const navigate = useNavigate();

    const textFormater = (nome: string, dados: string, telefone: string, isWhatsapp: boolean, email: string) => {
        return nome + "\n" + telefone + (isWhatsapp ? " - WhatsApp" : "") + "\n" + email + "\n" + dados
    }

    const onSubmit = (data: FormData) => {
        const to = "matheuscriv@gmail.com";
        const subject = "Venda de veiculo"
        const text = textFormater(data.nome, data.dados, data.telefone, data.isWhatsapp, data.email);
        mutate({to, subject, text})
        navigate("/form-concluido")
    }

    return (
        <div className="venda-form-input-div">
            <div className="input-venda-dados">
                <h3>Dados do seu veículo</h3>
                <div className={errors.dados ? "content-input-venda-error" : "content-input-venda "}>
                    <IoDocumentTextOutline className="icon-input-venda"/>
                    <input type="text" className="input-venda-form-item" placeholder="Digite aqui..." {...register("dados", {required: true})} />
                </div>
            {errors.dados?.type === "required" && <h4 className="input-venda-error-message">O Campo dados é obrigatório.</h4>}
                <p>Descreva o seu veículo. </p>
                <p>Exemplo: Toyota Corola 2017...</p>
            </div>
            <div className="input-venda-nome">
                <h3>Seu nome</h3>
                <div className={errors.nome ? "content-input-venda-error" : "content-input-venda "}>
                    <TbFaceId className="icon-input-venda"/>
                    <input type="text" className="input-venda-form-item" placeholder="Digite aqui..." {...register("nome", {required: true})} />
                </div>
                {errors.nome?.type === "required" && <h4 className="input-venda-error-message">O Campo nome é obrigatório.</h4>}
            </div>
            <div className="input-venda-phone">
                <h3>Seu telefone</h3>
                <div className={errors.telefone ? "content-input-venda-error" : "content-input-venda "}>
                    <MdPhone className="icon-input-venda"/>
                    <IMaskInput mask="(00) 00000-0000" type="text" className="input-venda-form-item" placeholder="Digite aqui..."
                           {...register("telefone", {required: true})}
                           onAccept={(e) => setValue('telefone', e)}
                    />
                </div>
                {errors.telefone?.type === "required" && <h4 className="input-venda-error-message">O Campo telefone é obrigatório.</h4>}

                <div className="check-input-phone-div">
                    <input type="checkbox"{...register("isWhatsapp")}/>
                    <p>Este telefone é WhatsApp</p>
                </div>
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
                {errors.email?.type === "required" && <h4 className="input-venda-error-message">O Campo email é obrigatório.</h4>}
                {errors.email?.message === "invalido" && <h4 className="input-venda-error-message">Esse não é um email valido</h4>}
            </div>
            <div className="content-button-submit-form-venda">
                <button className="button-submit-form-venda" onClick={() => handleSubmit(onSubmit)()}>Enviar para análise <GoArrowRight
                    className="icon-button-submit-form-venda"/></button>
            </div>
        </div>
    )
}

export default FormDadosClienteVenda
