import React, { useContext, useState, useEffect, TouchableOpacity } from 'react';
import AxiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext';
import Header from '../../components/Header'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';


const Item = ({ img, nomeEditora }) => {
  return (
    <View style={styles.item}>
      <Text>{nomeEditora}</Text>
      <Image 
        style={styles.itemPhoto}
        source={{
          uri: `data:image/png;base64,${img}`
        }}
      />
    </View>
  )
};

const Home = () => {
  const {dadosUsuario} = useContext(DataContext);
  const [dadosEditora, setDadosEditora] = useState();
  console.log(dadosEditora);

  useEffect (() => {
    getTodasEditoras();
  }, [])

  const getTodasEditoras = async () => {
    await AxiosInstance.get(
      '/editoras',
      { headers: {'Authorization' : `Bearer ${dadosUsuario?.token}`} }
    ).then( resultado => {
      setDadosEditora(resultado.data);
    }).catch((error) => {
      console.log('Ocorreu um erro ao recuperar os dados das Editoras: ' + error);
    })
  }

  return (
    <View style={styles.container}>
      {/* <View style={{ flex: 1 }}> */}
        <Header title='Home'></Header>
        <Text>{dadosEditora && dadosEditora.length > 0 ? dadosEditora[1].nomeEditora : ''}</Text>
        <FlatList
            data={dadosEditora}
            renderItem={({ item }) => <Item nomeEditora={item.nomeEditora} img={item.img} />}
            keyExtractor={item => item.codigoEditora}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      {/* </View> */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  item: {
    width: 200,
    height: 200,
    // backgroundColor: '#fff',
    
  },
});

export default Home;