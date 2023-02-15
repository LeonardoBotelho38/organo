import CampoTexto from '../CampoTexto/';
import "./Formulario.css";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({aoColaboradorCadastrado, times, cadastrarTime}) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  function aoSalval (evento){
    evento.preventDefault()
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  

  return (
    <section className='formulario'>
      <form onSubmit={aoSalval}>
        <h2>Preencha os dados para cadastro</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="digite seu nome" 
          value ={nome}
          aoAlterado = {valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="digite seu cargo" 
          value ={cargo}
          aoAlterado = {valor => setCargo(valor)}
        />
        <CampoTexto  
          label="Imagem" 
          placeholder="digite o endereço da imagem"
          value ={imagem}
          aoAlterado = {valor => setImagem(valor)} 
        />
        <ListaSuspensa 
          label="Time" 
          itens={times}
          value = {time}
          aoAlterado = {valor => setTime(valor)}
        />
        <Botao texto="Criar card"/>
      </form>
      
      <form onSubmit={(evento)=>{
        evento.preventDefault()
        cadastrarTime({nome:nomeTime, cor: corTime})
      } }>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="digite o nome do time" 
          value ={nomeTime}
          aoAlterado = {valor => setNomeTime(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cor" 
          placeholder="digite a cor do time" 
          value ={corTime}
          aoAlterado = {valor => setCorTime(valor)}
        />
        <Botao texto="Criar um novo time"/>
      </form>
    </section>
  );
};

export default Formulario;
