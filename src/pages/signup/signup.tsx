import React from 'react'

import VerticalItensContainer from '../../components/verticalItensContainer/verticalItensContainer'
import CustomButton from '../../components/button/Button'
import CustomTextField from '../../components/textInput/textInput'
import TextLink from '../../components/textLink/textLink'

import { Form } from 'react-final-form';

const Signup : React.FC = () =>{

    const onEnterClick = () =>{
        console.log("teste1")
    }

    const onSignUpClick = () =>{
        console.log("teste2")
    }


    return(
        <>
            
            <Form 
            onSubmit={()=>{}}
            render={() => 
                <form>
                    <VerticalItensContainer maxWidth="lg">
                        <p>Cadastro</p>
                        <CustomTextField
                            label="Insira aqui seu e-mail..."
                            name="email"
                            margin="none"
                        />
                        <CustomTextField
                            label="Insira aqui sua senha..."
                            name="password"
                            margin="none"
                        />

                        <CustomButton onClick={onEnterClick}>
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