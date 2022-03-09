import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Pressable

} from 'react-native';

const Paciente = ({
    item,setModalVisible,
    pacienteEditarApp,
    pacienteEliminar,
    setModalPaciente,
    setPacienteShow
}) => {
    const {paciente, date,id} = item

    return (
        <Pressable
            onPress={()=>{
                setModalPaciente(true)
                setPacienteShow(item)
            }}  
        >
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>PACIENTE:</Text>
                <Text style={styles.texto}>{paciente}</Text>
                {/* <Text style={styles.titulo}>Fecha</Text> */}
                <Text style={styles.fecha}>{date}</Text>
                <View style={styles.contenedorBotones}>
                    <Pressable 
                        style={[styles.btn, styles.btnEditar]}
                        onPress={()=>{
                            pacienteEditarApp(id)
                            setModalVisible(true)
                        }}
                    >
                        <Text style={styles.btnTexto}>
                            Editar
                        </Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.btn, styles.btnEliminar]}
                        onPress={()=>pacienteEliminar(id)}
                        >
                        <Text style={styles.btnTexto}>
                            Eliminar
                        </Text>
                    </Pressable>

                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#FFF',
        marginHorizontal:20,
        paddingVertical:10,
        borderBottomColor:"#94a3B8",
        borderBottomWidth:1
    },
    titulo:{
        marginLeft:20,
        fontSize: 20,
        fontWeight:'900'
        
    },
    texto:{
        color:'#6D28D9',
        marginLeft:20,
        fontSize: 25,
        fontWeight:'600'
    },
    fecha:{
        marginLeft:20,
        fontSize: 18,
        fontWeight:'600'

    },
    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        marginHorizontal:20
        
    },
    btn:{
        padding:10,
        borderRadius:15,
        paddingHorizontal:10
    },
    btnEditar:{
        backgroundColor:'#da6c32'
    },
    btnEliminar:{
        backgroundColor:'#EF4444'
    },
    btnTexto:{
        fontSize:20,
        fontWeight:'900',
        color:'#FFF'
    }

})
export default Paciente
