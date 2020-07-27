import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View, Text, StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { logout } from '../store/actions/UserA'

class Profile extends Component {
    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        const options= { email: this.props.email, secure: true }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar}/>
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
                <TouchableOpacity style={styles.buttom} onPress={this.logout}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 15
    }, 
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

//export default Profile
export default connect(mapStateToProps, mapDispatchToProps)(Profile)