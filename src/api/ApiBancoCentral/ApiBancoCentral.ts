import axios from 'axios'

const api = axios.create({
    baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/"
});

export interface DolarToday {
    cotacaoCompra:   number;
    cotacaoVenda:    number;
    dataHoraCotacao: string;
}


export const getDolarToday = async () => {
    try {
        const date = new Date();
        const stringDate = (date.getMonth()+1) + "-" + (date.getDate()-1) + "-" + date.getFullYear(); 

        const request = await api.get(`CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao='0${stringDate}'&%24format=json`);
        debugger
        if(request.data.value.length > 0) return request.data.value[0];
        else return null

    } catch (error) {
        return null;
    }

}

export default api;

//https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao='03-11-2021'


