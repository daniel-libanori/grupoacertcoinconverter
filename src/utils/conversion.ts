import {getBitCoinToday} from '../api/ApiBitcoin'
import {getDolarToday} from '../api/ApiBancoCentral'

const getCoinsInfo = async () =>{

    const callGetCoinsToday = async () =>{
        const responses = await Promise.all([getBitCoinToday(),getDolarToday()]) ;
        return responses;
    }
    const resObj = await callGetCoinsToday();

    const newObj = {
        dolar:{
            realToDolarPrice: resObj[1].cotacaoCompra * 10000,
            dolarToRealPrice: resObj[1].cotacaoVenda * 10000
        },
        bitCoin:{
            realToBitCoinPrice: parseInt(resObj[0].ticker.buy) * 100000000,
            bitCoinToRealPrice: parseInt(resObj[0].ticker.sell) * 100000000
        }
    }

    return newObj;

}

export const convertDolarToReal = async (dolar : number) => {
    const coinsInfo = await getCoinsInfo();
    return (dolar * (coinsInfo.dolar.dolarToRealPrice/10000))
}

export const convertRealToDolar = async (real: number) => {
    const coinsInfo = await getCoinsInfo();
    return (real / (coinsInfo.dolar.realToDolarPrice/10000))
}

export const convertBitCoinToReal = async (bitcoin : number) => {
    const coinsInfo = await getCoinsInfo();
    return (bitcoin * (coinsInfo.bitCoin.bitCoinToRealPrice/100000000))
}

export const convertRealToBitCoin = async (real : number) => {
    const coinsInfo = await getCoinsInfo();
    return (real / (coinsInfo.bitCoin.realToBitCoinPrice/100000000))
}

export const convertBitCoinToRealToDolar = async (bitcoin : number) => {
    const coinsInfo = await getCoinsInfo();
    return (bitcoin * (coinsInfo.bitCoin.bitCoinToRealPrice/100000000)/ (coinsInfo.dolar.realToDolarPrice/10000))
}

export const convertDolarToRealToBitCoin = async (dolar : number) => {
    const coinsInfo = await getCoinsInfo();
    return (dolar * (coinsInfo.dolar.dolarToRealPrice/10000)/ (coinsInfo.bitCoin.realToBitCoinPrice/100000000))
}
