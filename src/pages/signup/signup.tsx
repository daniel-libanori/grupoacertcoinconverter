import React , {useCallback} from 'react'

import VerticalItensContainer from '../../components/containers/verticalItensContainer'
import CustomButton from '../../components/button/Button'
import CustomTextField from '../../components/textInput/textInput'
import TextLink from '../../components/textLink/textLink'

import { Form } from 'react-final-form';

import {useHistory} from 'react-router-dom'
import fireBaseConfig from '../../firebase/firebase'

import TextField from '@material-ui/core/TextField';

const Signup : React.FC = () =>{

    const history = useHistory();

    const loginHandler = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
        
            try {
                await fireBaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                console.log(error);
            }
        }
    ,[history]);


    return(
        <>
            <Form 
            onSubmit={()=>{}}
            render={() => 
                <form onSubmit={loginHandler}>
                    <VerticalItensContainer maxWidth="lg">
                        <p>Cadastro</p>
                        <TextField
                            label="Insira aqui seu e-mail..."
                            name="email"
                            margin="none"
                            style={{width: 350}}
                        />
                        <TextField
                            label="Insira aqui sua senha..."
                            type="password"
                            name="password"
                            margin="none"
                            style={{width: 350}}
                        />

                        <CustomButton type="submit">
                            Criar Cadastro
                        </CustomButton>

                        <TextLink to="/signin">
                            Já é cadastrado? Clique aqui
                        </TextLink>
                    </VerticalItensContainer>

                </form>}
            />

        </>
    );
}
export default Signup;