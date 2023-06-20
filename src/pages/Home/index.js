import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import Header from '../../components/Header'
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
    if (item.isDestaque) {
      return <Destaque item={item} />
    }
    if (item.isLivro) {
      return (
        <View style={styles.itemLivro}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          <View style={styles.itemDescribeContainer}>
            <Text style={styles.itemTextLivros}>{item.text}</Text>
            <Text style={styles.itemDescricao}>{item.descricao}</Text>
          </View>
        </View>
      )
    } 
    if (item.isEditora) {
      return (
        <View style={styles.itemEditora}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTextEditoras}>{item.text}</Text>
          </View>
        </View>
      )
    }
};

const Destaque = ({ item }) => {
  return (
    <View style={styles.destaqueContainer}>
      <Image 
      style={styles.itemPhotoDestaque}
      source={{ uri: item.uri }}
      />
      <View style={styles.itemDescribeContainer}>
        <Text style={styles.itemTextLivros}>{item.text}</Text>
        <Text style={styles.itemDescricao}>{item.descricao}</Text>
      </View>
    </View>
  )
}

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS} //array de seções a serem renderizadas na lista
          renderSectionHeader={({ section }) => ( //retorna o título da seção
          <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
                <FlatList
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </>
          )}
          renderItem={({}) => {
            return null;
          }}
        />            
      </View>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Editoras',
    data: [
      {
        key: '1',
        isEditora: true,
        text: 'Editora 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        isEditora: true,
        text: 'Editora 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        isEditora: true,
        text: 'Editora 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        isEditora: true,
        text: 'Editora 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        isEditora: true,
        text: 'Editora 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Livros',
    data: [
      {
        key: '1',
        isLivro: true,
        text: 'Título 1',
        descricao: 'descrição',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        isLivro: true,
        text: 'Título 2',
        descricao: 'descrição',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        isLivro: true,
        text: 'Título 3',
        descricao: 'descrição',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        isLivro: true,
        text: 'Título 4',
        descricao: 'descrição',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        isLivro: true,
        text: 'Título 5',
        descricao: 'descrição',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Destaques',
    data: [
      {
        key: 'destaque',
        isDestaque: true,
        uri: 'https://nerdstore.com.br/wp-content/uploads/2020/02/livro-o-hobbit-edicao-nerdstore-07.jpg',
        text: 'Item',
        descricao: 'descrição',
      },
    ],
  },

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginLeft: 10,
  },
  flatList: {
    display: 'flex',
    gap: 10,
  },
  itemEditora: {
    margin: 10,
  },
  itemLivro: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemTextEditoras: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 18,
  },
  itemTextLivros: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 18,
    marginTop: 5,
    marginHorizontal: 10,
  },
  itemDescribeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  itemTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

  },
  itemDescricao: {
    width: '100%',
    color: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  destaqueContainer: {
    width: 320,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  sectionHeaderDestaque: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
  },
  itemPhotoDestaque: {
    height: 200,
    marginTop: 10,
  },
});

export default Home;