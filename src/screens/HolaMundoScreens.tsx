import React from 'react'
import { View , Text} from 'react-native';

export const HolaMundoScreens = () => {
  return (
    <View style= {{
        flex: 1,
        justifyContent: 'center'
      }}>
          <Text style={{
            fontSize: 45,
            textAlign: 'center'
          }}>
            Hola mundo screens
          </Text>
      </View>
  )
}
