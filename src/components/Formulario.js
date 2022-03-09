import React,{useState,useEffect} from 'react'
import {Modal,Text,View,Pressable,Button, StyleSheet, TextInput, ScrollView, Alert} from 'react-native'
import DatePicker from 'react-native-datepicker'


const Formulario = ({
    modalVisible,
    setModalVisible,
    setPacientes,
    pacientes,
    pacienteEditarForm,
    setPacienteEditarForm

}) => {
    const [paciente,setPaciente] = useState('')
    const [id, setId]= useState("")
    const [propetario,setPropetario] = useState('')
    const [email,setEmail]=useState('')
    const [numero,setNumero]= useState('')
    const [sintomas,setSintomas]=useState('')
    const [date,setDate] = useState('')

    useEffect(()=>{
        if(Object.keys(pacienteEditarForm).length > 0){
            setId(pacienteEditarForm.id)
            setPaciente(pacienteEditarForm.paciente)
            setPropetario(pacienteEditarForm.propetario)
            setEmail(pacienteEditarForm.email)
            setNumero(pacienteEditarForm.numero)
            setSintomas(pacienteEditarForm.sintomas)
            setDate(pacienteEditarForm.date)
        }
    },[pacienteEditarForm])

    const handleBack = () =>{
        setModalVisible(!modalVisible)
        setId('')
        setPaciente('')
        setPropetario('')
        setEmail('')
        setNumero('')
        setDate('')
        setSintomas('')  
        setPacienteEditarForm({})      
    }

    const hadleCita= () =>{
        //Validar
        if([paciente,propetario,email,sintomas,date].includes('')){
            Alert.alert(
                'error',
                'Todos los campos son obligatorios',
            )
            return
        }
        const nuevoPaciente={
            paciente,
            propetario,
            email,
            numero,
            sintomas,
            date
        }

        if(id){
            nuevoPaciente.id = id
            const ActualizarPacientes = pacientes.map(pacienteState => 
                pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState
            )
            setPacientes(ActualizarPacientes)
        }else{
            nuevoPaciente.id = Date.now()
            setPacientes([...pacientes,nuevoPaciente])
        }
        
        setModalVisible(!modalVisible)
        setId('')
        setPaciente('')
        setPropetario('')
        setEmail('')
        setNumero('')
        setDate('')
        setSintomas('')
        setPacienteEditarForm('')

    }
    return (
        <Modal
        animationType='slide'
        visible={modalVisible} 
        >
            <View style={styles.contenido}>
                <Text
                    style={styles.titulo}
                >{pacienteEditarForm.id ? 'Editar': 'Nueva'}
                    <Text style={styles.textBold}> Cita </Text>
                </Text>
                <Pressable 
                    style={styles.closePress}
                    onPress={()=>handleBack()}
                >
                    <Text
                     style={styles.closeText}
                    >X Cerrar</Text>
                </Pressable>
                <ScrollView>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Paciente'
                            fontSize={20}
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propetario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propetario'
                            fontSize={20}
                            placeholderTextColor={'#666'}
                            value={propetario}
                            onChangeText={setPropetario}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propetario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email Propetario'
                            fontSize={20}
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Numero Propetario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Numero Propetario'
                            fontSize={20}
                            placeholderTextColor={'#666'}
                            keyboardType='phone-pad'
                            value={numero}
                            onChangeText={setNumero}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha</Text>
                        <View style={{alignSelf:'center'}}>
                            <DatePicker
                                date={date}
                                style={{width: 200, backgroundColor:"#FFF"}}
                                showIcon={false}
                                onDateChange={setDate}
                                placeholder="select date"
                                customStyles={{
                                    dateText:{
                                        fontSize:20
                                    },
                                    placeholderText:{
                                        fontSize:20,
                                        color:"#000"
                                    }
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Sintomas paciente'
                            fontSize={20}
                            placeholderTextColor={'#666'}
                            multiline={true}
                            numberOfLines={4}
                            value={sintomas}
                            onChangeText={setSintomas}
                        />
                    </View>
                    <Pressable 
                        style={[styles.closePress,{backgroundColor:'#F59E0B'}]}
                        onPress={hadleCita}
                    >
                        <Text
                        style={styles.closeText}
                        >{pacienteEditarForm.id?"Editar":"Agregar"} 
                        <Text> Paciente</Text> 
                        </Text>
                    </Pressable>

                    
                    </ScrollView>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    contenido:{
        backgroundColor:'#6D28D9',
        flex:1
    },
    titulo:{
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        marginTop:10,
        color:'white'
    },
    textBold:{
        fontWeight:'900'
    },
    closePress:{
        marginVertical:10,
        marginHorizontal:20,
        backgroundColor: "#5827A4",
        borderRadius:15,
    },
    closeText:{
        fontSize:20,
        textAlign:'center',
        padding:5,
        fontWeight:'600',
        color:"#FFF"
    },
    input:{
        backgroundColor:"#FFF",
        borderRadius:10,
        padding:10
    },
    campo:{
        marginHorizontal:30,
        marginVertical:10
    },
    label:{
        color:"#FFF",
        marginBottom:10,
        fontSize:20,
        fontWeight:'600'
    }


})
export default Formulario
