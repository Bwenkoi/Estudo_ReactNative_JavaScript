import React from 'react'
import { 
    createBottomTabNavigator, createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddPhoto from '../src/screens/AddPhoto'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
import Splash from './screens/Splash'

const authRouter = createStackNavigator ({
    Login: { screen: Login, navigationOptions: { title: 'Login' } },
    Register: { screen: Register, navigationOptions: { title: 'Register' } }
}, {
    initialRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator ({
    Profile: Profile,
    Auth: authRouter
}, {
    initialRouteName: 'Auth'
})

const menuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({  tintColor }) => 
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({  tintColor }) => 
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({  tintColor }) => 
                <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createBottomTabNavigator(menuRoutes, MenuConfig)
//export default MenuNavigator

const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: MenuNavigator
}, {
    initialRouteName: 'Splash'
})

export default SplashRouter