import axios from 'axios'


const apiBitCoin = axios.create({
    baseURL: "https://www.mercadobitcoin.net/"
});

export const getBitCoinToday = async () => {
    try {
        const request = await apiBitCoin.get(`api/BTC/ticker/`);
        if(request.data) return request.data;
        else return null

    } catch (error) {
        return null;
    }

}

export default getBitCoinToday;
