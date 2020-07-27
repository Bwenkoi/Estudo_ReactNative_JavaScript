import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

const ValidarProps = props =>
    <Text style={Padrao.ex}>
        {props.label || 'Ok!'}
        {props.ano + 2000}
    </Text>

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.PropTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps