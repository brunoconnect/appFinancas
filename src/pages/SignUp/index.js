import { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native'

// Aproveitando o mesmo estilo do sign in
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCadastrar() {
        if(nome === '' || email === '' || password === '') return ;
        signUp(email, password, nome);
    }

    return (
        <Background>
            <Container
            // Verificar porque o código quebrou - aula criando pagina de login
            // behavior={Plataform.OS === 'ios' ? 'padding' : ''}
            // enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleCadastrar}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF' />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    )
}