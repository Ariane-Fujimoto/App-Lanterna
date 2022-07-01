import React, {useEffect, useState} from 'react';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const lampadaAcesa = 'https://w7.pngwing.com/pngs/287/152/png-transparent-incandescent-light-bulb-drawing-coloring-book-christmas-lights-light-color-lamp-cartoon.png';
const lampadaApagada = 'https://www.imagensempng.com.br/wp-content/uploads/2021/09/Icone-lampada-Png-1024x1024.png';

const App = () => {
    const [toggle, setToggle] = useState(false);
   
    const hangleChangeToggle = () => setToggle(old => !old);

    useEffect(() => {
        Torch.switchState(toggle)
    }, [toggle]);

    useEffect(() => {
        const subscription = RNShake.addListener(() => {
            setToggle(old=>!old)
    });
    
    return () => subscription.remove();

    }, []);

    return <View style={toggle ? style.containerLight : style.container}>
        <TouchableOpacity onPress={hangleChangeToggle}>
            <Image 
                style={toggle ? style.luzAcesa : style.luzApagada} 
                source={
                    toggle 
                    ? {uri: lampadaAcesa} 
                    : {uri: lampadaApagada}}
                />
        </TouchableOpacity>
    </View>;
}

export default App;


//Estilos Css
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerLight: {
        flex: 1,
        backgroundcolor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    luzAcesa:{
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 200,
        height: 200,
    },

    luzApagada:{
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
        width: 200,
        height: 200,
    }
})