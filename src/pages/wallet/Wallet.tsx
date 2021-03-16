import React from 'react'
import fireBaseConfig from '../../firebase/firebase'

const Wallet : React.FC = () => {

    return (
    <>
        wallet
        <button onClick={()=>fireBaseConfig.auth().signOut()}>Delogar</button>
    </>)
}

export default Wallet