import {Opcional} from "./Opcional.ts";
import {Foto} from "./Foto.ts";

interface opcionais {
    opcional: Opcional[]
}

interface fotos {
    foto: Foto[]
}

export interface Vehicle {
    codigo: string;
    placaVeiculo: string;
    marca: string;
    modelo: string;
    versao: string;
    combustivel: string;
    cambio: string;
    cor: string;
    km: string;
    carroceria: string;
    precoVenda: string;
    opcionais: opcionais;
    fotos: fotos;
    usadoNovo: string;
    anoModelo: string;
    anoFabricacao: string;
    tipoVeiculo: string;
    blindado: string;
    destaque: string;
    observacao: string;
    cilindradas: string,
    cnpj: string,
    hashPaidTraffic: string,
    quantidadePortas: string,
    chassi: string,
    renavan: string,
    precoOriginalVenda: string,
    urlReservaMercadoLivre: string,
    youtubeVideo: string,
    dataCriacao: string,
    dataAlteracao: string,
    estilo: string
}
