import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AxiosInstance from '../../api/AxiosInstance'
import { DataContext } from '../../context/DataContext';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const {armazenarDadosUsuario} = useContext(DataContext);

    const handleLogin = async () => {
        console.log(`E-mail: ${email} - Senha: ${senha}`)
        // navigation.navigate('Main');

        try {
            //await só pode ser usado com async
            const resultado = await AxiosInstance.post('auth/signin',{
                username : email,
                password: senha
            });

            if (resultado.status === 200) {

                var jwtToken = resultado.data;
                armazenarDadosUsuario(jwtToken['accessToken']);

                navigation.navigate('Main'); //propriedade 'name'
            } 
        }catch(error) {
        console.log('Erro durante o processo de login: ' + error);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Bem-vindo!</Text>
            <TextInput
            style={styles.input}
            placeholder="  e-mail"
            onChangeText={setEmail} //monitora a alteração do texto
            value={email}
            />
            <TextInput
            style={styles.input}
            placeholder="  senha"
            onChangeText={setSenha}
            value={senha}
            />
            <TouchableOpacity
            style={styles.button}
            onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
},
header: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 10,
    color: '#f4f4f4',
},
input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    color: 'rgba(255, 255, 255, 0.7)',
},
button: {
    width: '100%',
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 20,
    borderRadius: 5,
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
},
});

export default Login;
