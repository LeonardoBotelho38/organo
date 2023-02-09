import CampoTexto from '../CampoTexto/';
import "./Formulario.css";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {

  const times = [
    'Programação',
    'Front-end',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Gestão'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  function aoSalval (evento){
    evento.preventDefault()
    console.log('formulario enviado =>', nome, cargo, imagem, time)
  }

  

  return (
    <section className='formulario'>
      <form onSubmit={aoSalval}>
        <h2>Preencha os dados para cadastro</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="digite seu nome" 
          valor ={nome}
          aoAlterado = {valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="digite seu cargo" 
          valor ={cargo}
          aoAlterado = {valor => setCargo(valor)}
        />
        <CampoTexto  
          label="Imagem" 
          placeholder="digite o endereço da imagem"
          valor ={imagem}
          aoAlterado = {valor => setImagem(valor)} 
        />
        <ListaSuspensa 
          label="Time" 
          itens={times}
          valor = {time}
          aoAlterado = {valor => setTime(valor)}
        />
        <Botao texto="Criar card"/>
      </form>
    </section>
  );
};

export default Formulario;
