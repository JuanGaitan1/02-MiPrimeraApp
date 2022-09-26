import React from 'react'
import { View, TouchableNativeFeedback, Text , StyleSheet , Platform  } from 'react-native'


interface Props{
    title: string
    onPress : () => void;
    position?: 'br' | 'bl';
}

export const Fab = ({ title, onPress, position='br'}: Props) => {
  return (
    <View style= {[
        styles.fabLocation,
        (position === 'bl') 
        ? styles.left 
        : styles.right
    ]}>
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('blue', false, 30)}
        >
            <View style= {styles.fab}>
                <Text style = {styles.fabText}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
  )
}


const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
        right: 0,
    },
    right:{
        right: 25
    },
    left: {
        left:25
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    fabText:{
        color: 'white',
        fontSize: 30,
        alignSelf:'center',
        fontWeight: 'bold'
    }
})