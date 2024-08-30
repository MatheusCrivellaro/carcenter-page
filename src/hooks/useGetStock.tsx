import axios, {AxiosPromise} from "axios";
import {Vehicle} from "../interfaces/Vehicle.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://matheuscrivellaro.online"

const USUARIO = "api.autodealer@startgarage.com.br";
//user.api@carcenter.com.br
const SENHA = "Autonitro@2023";
const CNPJ = "24967987000186";
//30495051000100

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
