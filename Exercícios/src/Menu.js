import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Simples: {
        screen: () => <Simples texto='So Far So Good!'/>,
        navigationOptions: {title: 'Texto Simples'}
    },
    Simples2: {
        screen: () => <Simples texto='Só Por Garantia!'/>,
        navigationOptions: {title: 'Outro Texto Simples'}
    },
    ParImpar: {
        screen: () => <ParImpar numero={5}/>,
        navigationOptions: {title: 'Par || Impar'}
    },
    Inverter: {
        screen: () => <Inverter texto='React-Native!'/>,
        navigationOptions: {title: 'Texto Invertido'}
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Contador: {
        screen: () => <Contador numeroInicial={0} />,
        navigationOptions: {title: 'Contagem'}
    }, Plataformas: {
        screen: () => <Plataformas/>,
        navigationOptions: {title: 'Plataformas'}
    }, ValidarProps: {
        screen: () => <ValidarProps ano={19}/>,
        navigationOptions: {title: 'Validar Propriedades'}
    }, Evento: {
        screen: () => <Evento/>,
        navigationOptions: {title: 'Eventos'}
    }, Avo: {
        screen: () => <Avo nome='Milton' sobrenome='Renó'/>,
        navigationOptions: {title: 'Hierarquia'}
    }, TextoSincronizado: {
        screen: () => <TextoSincronizado />,
        navigationOptions: {title: 'Texto Sincronizado'}
    }, ListaFlex: {
        screen: () => <ListaFlex/>,
        navigationOptions: {title: 'Lista de Alunos'}
    }, FlexCirculos: {
        screen: () => <Flex/>,
        navigationOptions: {title: 'Flex Círculos'}
    }
}, { drawerWidth: 300 }
)