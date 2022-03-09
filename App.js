
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button, 
  Pressable,
  Modal,
  FlatList,
  Alert
} from 'react-native';

import  Formulario  from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import PacienteInfo from './src/components/PacienteInfo';


const App = () => {
  // colocar hooks aqui
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [pacienteEditarForm, setPacienteEditarForm] = useState({})
  const [modalPaciente, setModalPaciente]= useState(false)
  const [pacienteShow, setPacienteShow]= useState({})


  const pacienteEditarApp = id =>{
    const pacienteEditar = pacientes.filter((paciente)=>paciente.id === id)
    setPacienteEditarForm(pacienteEditar[0])
  }

  const pacienteEliminar = id=>{
    Alert.alert(
      '¿Deseas Elimnar este paciebnte?',
      'Un paceinte eliminado no se puede recuperar',
      [
        {text:"cancelar"},
        {text:"Eliminar",onPress:()=>{
          const pacientesActualizar = pacientes.filter(
            paciente => paciente.id !== id
          )
          setPacientes(pacientesActualizar)
        }}
      ]
    )
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={()=> setModalVisible(!modalVisible)}
        style={styles.btnNuevaCita}
      >
        <Text
          style={styles.btnText}
        >Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.mensaje}>No hay pacientes</Text>:
        <FlatList
          data={pacientes}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>{
            return(
                <Paciente
                  setModalVisible={setModalVisible}
                  pacienteEditarApp={pacienteEditarApp}
                  item={item}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
                  setPacienteShow={setPacienteShow}
                />
            )
          }}
        />      
      }

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        pacienteEditarForm={pacienteEditarForm}
        setPacienteEditarForm={setPacienteEditarForm}
      />

      <Modal
        visible={modalPaciente}
        animationType='slide'
        transparent={true}
        style={{marginTop:'10%'}}
      >
        <PacienteInfo
          setModalPaciente={setModalPaciente}
          setPacienteEditarForm={setPacienteEditarForm}
          pacienteShow={pacienteShow}
        />
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#F3F4F6',
    flex:1
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#374151',
    fontWeight:'600'
  },
  tituloBold:{
    fontWeight:'600',
    color:"#6D28D9"
  },
  btnNuevaCita:{
    backgroundColor:'#6D28D9',
    padding:20,
    margin:20,
    borderRadius:20
  },
  btnText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:"#FFF",
    textTransform:'uppercase'
  },
  mensaje:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  }

});

export default App;
