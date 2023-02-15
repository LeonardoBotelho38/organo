

import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [times, setTimes] = useState( [
    {
      id: uuidv4(),
      nome: 'Programação',
      
      cor:'#D9F7E9'
    },
    
    {
      id: uuidv4(),
      nome: 'Front-end',
      
      cor:'#E8F8FF'
    },

    {
      id: uuidv4(),
      nome: 'Devops',
      
      cor:'#F0F8E2'
    },
    
    {
      id: uuidv4(),
      nome: 'Ux e Design',
      
      cor:'#FDE7E8'
    },

    {
      id: uuidv4(),
      nome: 'Mobile',
      
      cor:'#FAE9F5'
    },
    
    {
      id: uuidv4(),
      nome: 'Gestão',
      
      cor:'#FFF5D9'
    }
  ])



  const [colaboradores, setColaboradores]= useState([])

  function deletarColaborador(nome){
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome))
  }

  function mudaCorDoTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor
      }
      return time
    }))
  }


  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador.id)
    setColaboradores([...colaboradores, colaborador])
  }

  function cadastrarTime (novoTime){
    setTimes([...times, {...novoTime, id:uuidv4()}])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      
      {times.map(time => <Time 
        mudarCor = {mudaCorDoTime}
        key={time.nome} 
        nome = {time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        aoDeletar={deletarColaborador}
      />)}
      
        
        <Footer/>
    </div>
  );
}

export default App;
