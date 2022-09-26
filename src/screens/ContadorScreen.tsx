import React, { useState } from 'react'
import { Text, View , TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);
    const onPress = () => setContador(contador => contador + 1);



  return (
    <View style = {styles.container}>
        <Text style={styles.title}>
            Contador: { contador }
        </Text>
        
        <Fab
            title= "+1"
            onPress={() => setContador ( contador + 1)}
        ></Fab>

        <Fab
            title= "-1"
            position='bl'
            onPress={() => setContador ( contador - 1)}
        ></Fab>

    </View>
  )
}


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize:40,
        position: 'relative',
        top: -15
    },
    botonincrementar:{
        backgroundColor: 'red',
        borderRadius:100
    },
    fabLocationBL:{
        position: 'absolute',
        bottom: 25,
        left: 0,
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText:{
        color: 'white',
        fontSize: 30,
        alignSelf:'center',
        fontWeight: 'bold'
    }
})