import React from 'react'
import { Text, View} from 'react-native'
import Padrao from '../estilo/Padrao'

const fonte = { style: Padrao.ex }

function filhosProps (props){
    return React.Children.map(props.children,
        c => React.cloneElement (c, {...props, ...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {filhosProps(props)}
    </View>
    
export const Avo = props => 
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai {...props} nome = 'Adriano'>
            <Filho nome ='Breno'/>
            <Filho nome ='Laura'/>
            <Filho nome ='Bruna'/>
        </Pai>
    </View>