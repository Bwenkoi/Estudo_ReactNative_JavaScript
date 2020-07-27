import React, {Component} from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm() {
        this.setState({ numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({ numero: this.props.numeroInicial})
    }

    render () {
        return (
            <View>
                <Text style={Padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.maisUm()}
                    onLongPress={this.limpar}
                >
                <Text style={Padrao.ex}>Incrementar/Zerar</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}