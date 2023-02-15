
import './Campo.css'


const Campo = ({label, placeholder, value, aoAlterado, obrigatorio = false, type = 'text'}) =>{
    
 
    const aoDigitado = (evento) =>{
       aoAlterado(evento.target.value)
    }
   return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>


   )
}

export default Campo