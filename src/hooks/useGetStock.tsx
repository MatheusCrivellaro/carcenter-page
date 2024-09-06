import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import {useQuery} from "@tanstack/react-query";

const API_URL = "https://matheuscrivellaro.online"

const USUARIO = "integracaoapi@autonitro.com.br";
//integracaoapi@autonitro.com.br
//user.api@carcenter.com.br
//apiautodealer@carcenter.com.br
const SENHA = "Autonitro@2023";
const CNPJ = "31897305000171";
//31897305000171
//30495051000100
//04675258000149

const fetchStock = async (): AxiosPromise<Vehicle[]> => {
    return axios.get(API_URL + '/estoque/' + USUARIO + '/' + SENHA + '/' + CNPJ)
}

export function useGetStock() {
    const query = useQuery({
        queryFn: fetchStock,
        queryKey: ['get-stock']
    })

    return {
        ...query,
        data: query.data?.data
    }
}
