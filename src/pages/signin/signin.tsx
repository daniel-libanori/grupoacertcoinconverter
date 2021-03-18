import React , {useContext, useCallback} from 'react'

import { Form } from 'react-final-form';

/* Components */
import VerticalItensContainer from '../../components/containers/verticalItensContainer'
import CustomButton from '../../components/button/Button'
import CustomTextField from '../../components/textInput/textInput'
import TextLink from '../../components/textLink/textLink'

import {Redirect, useHistory} from 'react-router-dom'
import {AuthContext} from '../../contexts/authContext'
import fireBaseConfig from '../../firebase/firebase'

const Home : React.FC = () => {

    const context = useContext(AuthContext);
    const history = useHistory();

    const loginHandler = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
        
            try {
                await fireBaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push('/wallet');
            } catch (error) {
                console.log(error);
            }
        }
    ,[history]);


    if (context?.user) {
        return <Redirect to="/wallet" />;
    }

    return(
        <>
            <Form 
            onSubmit={()=>{}}
            render={() => 
                <form onSubmit={loginHandler}>
                    <VerticalItensContainer maxWidth="lg">
                        <p>Login</p>
                        <CustomTextField
                            label="Insira aqui seu e-mail..."
                            name="email"
                            margin="none"
                        />
                        <CustomTextField
                            label="Insira aqui sua senha..."
                            name="password"
                            margin="none"
                            type="password"
                        />
                        <CustomButton type="submit">
                            Entrar
                        </CustomButton>
                        <TextLink to="/signup">
                            Cadastre Aqui
                        </TextLink>
                    </VerticalItensContainer>

                </form>}
            />

        </>
        

            
        
    );

}

export default Home;