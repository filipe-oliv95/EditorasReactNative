import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { DataContext } from '../../context/DataContext';
import AxiosInstance from '../../api/AxiosInstance';

const LivrosEditora = ({ imagem, nomeLivro, codigoLivro }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Livro', { livroId: codigoLivro });
  }
  
  return (
    <TouchableOpacity onPress={handlePress}>
        <View style={styles.itemLivros}>
          <Image 
            style={styles.itemPhoto}
            source={{ uri: `data:image/png;base64,${imagem}` }}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTextLivros}>{nomeLivro}</Text>
            <Text style={styles.itemTextLivros}>ver livro</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
};

const Editora = ({ route }) => {
  const { dadosUsuario } = useContext(DataContext);
  const [editora, setEditora] = useState(null);
  const editoraId = route.params?.editoraId;

  useEffect(() => {
    getEditoraById();
  }, []);

  const getEditoraById = async () => {
    try {
      const response = await AxiosInstance.get(`/editoras/${editoraId}`, {
        headers: { Authorization: `Bearer ${dadosUsuario?.token}` },
      });
      setEditora(response.data);
    } catch (error) {
      console.log('Ocorreu um erro ao recuperar os dados da Editora: ' + error);
    }
  };

  // if (editora && editora.listaLivrosDTO) {
  //   console.log(editora.listaLivrosDTO);
  //   console.log(editora.listaLivrosDTO[0].imagem);
  // }

  if (!editora) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando editora...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nomeEditora}>{editora.nomeEditora}</Text>

      <Text style={styles.sectionHeader}>LIVROS</Text>
          <FlatList
              data={editora.listaLivrosDTO}
              renderItem={({ item }) => <LivrosEditora imagem={item.imagem} nomeLivro={item.nomeLivro} codigoLivro={item.codigoLivro} />}
              keyExtractor={item => item.codigoLivro}
              horizontal
              showsHorizontalScrollIndicator={false}
          />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
  nomeEditora: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  enderecoEditora: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemLivros: {
    margin: 10,
  },
  itemTextLivros: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  itemTextContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
});

export default Editora;