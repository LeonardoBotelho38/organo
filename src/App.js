

import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    
    {
      nome: 'Front-end',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },

    {
      nome: 'Devops',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    
    {
      nome: 'Ux e Design',
      corPrimaria:'#E06869',
      corSecundaria:'#FDE7E8'
    },

    {
      nome: 'Mobile',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE9F5'
    },
    
    {
      nome: 'Gestão',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores]= useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome = {time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      

      
    </div>
  );
}

export default App;
