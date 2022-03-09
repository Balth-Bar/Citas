import React , {useEffect} from 'react'
import { View,Text,StyleSheet,Pressable } from 'react-native'

const PacienteInfo = ({setModalPaciente, pacienteShow}) => {

    const {id, paciente, propetario, email, numero, date, sintomas} = pacienteShow

    // useEffect(()=>{
    //     console.log(pacienteShow)
    // },[pacienteShow])

    return (
        <View style={styles.container}>
            <Text
                style={styles.titulo}
            >Información 
            <Text
                style={[styles.titulo,{fontWeight:'600'}]}
            > Paciente</Text>

            </Text>
            <Pressable 
                style={styles.closePress}
                onPress={()=>{
                    setModalPaciente(false)
                }}
            >
                <Text
                    style={styles.closeText}
                >X Cerrar</Text>
            </Pressable>
            <View
                style={styles.informacion}
            >
                <Text
                    style={styles.title}
                >Paciente:</Text>
                <Text
                    style={styles.label}
                >{paciente}</Text>
                <Text
                    style={styles.title}
                >Propetario:</Text>
                <Text
                    style={styles.label}
                >{propetario}</Text>
                <Text
                    style={styles.title}
                >Email:</Text>
                <Text
                    style={styles.label}
                >{email}</Text>
                <Text
                    style={styles.title}
                >Numero:</Text>
                <Text
                    style={styles.label}
                >{numero}</Text>
                <Text
                    style={styles.title}
                >Fecha:</Text>
                <Text
                    style={styles.label}
                >{date}</Text>
                <Text
                    style={styles.title}
                >Sintomas:</Text>
                <Text
                    style={styles.label}
                >{sintomas}</Text>
            </View>
            
            
        </View>
    )
}

export default PacienteInfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF89A",
    }, 
    titulo:{
        fontSize:30,
        alignSelf:'center',
        color:"#1A5F7A"
    },
    closePress:{
        marginVertical:10,
        marginHorizontal:20,
        backgroundColor: "#086E7D",
        borderRadius:15,
    },
    closeText:{
        fontSize:20,
        textAlign:'center',
        padding:5,
        fontWeight:'600',
        color:"#FFF"
    },
    informacion:{
        backgroundColor:"#FFF",
        marginHorizontal:20,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius:10
    },
    label:{
        fontSize:20,
        fontWeight:'600',
        marginVertical:5
    },
    title:{
        fontSize:20,
        fontWeight:'900'
    }

})
