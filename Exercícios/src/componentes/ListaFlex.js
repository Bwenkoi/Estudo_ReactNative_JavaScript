import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'Lionel', nota:8.5},
    {id: 2, nome: 'Ronaldo', nota:2.8},
    {id: 3, nome: 'Romário', nota:8.6},
    {id: 4, nome: 'Ney', nota:8.4},
    {id: 5, nome: 'Hazard', nota:9.8},
    {id: 7, nome: 'Firmino', nota:7.5},
    {id: 8, nome: 'Salah', nota:6.6},
    {id: 9, nome: 'Alison', nota:7.7},
    {id: 10, nome: 'Lucas', nota:4.5},
    {id: 11, nome: 'Eriksen', nota:6.4},
    {id: 12, nome: 'Coutinho', nota:10.0},
    {id: 13, nome: 'Rafael', nota:9.5},
    {id: 14, nome: 'Vanderlei', nota:6.2},
    {id: 15, nome: 'Dani', nota:4.3},
    {id: 16, nome: 'Marcelo', nota:8.2},
    {id: 17, nome: 'Marta', nota:7.7},
    {id: 18, nome: 'Cris', nota:6.4},
    {id: 19, nome: 'Formiga', nota:5.0}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 60,
    borderWidth: 0.5,
    borderColor: 'blue',
    
    //Flex

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )

}