import { useState } from "react"


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleEmail = ()=>{
      return  setUser(...user, user.email)
    }

    const handlePassword = ()=>{
        return setUser(...user, user.password)
    }
  return (
    <div>
        <form>
            <label htmlFor="">Email</label>
            <input type="email" name={user.email} id="" value={user.email} onChange={handleEmail}/>

            <label htmlFor="">Contraseña</label>
            <input type="password" name={user.password} id="" value={user.password} onChange={handlePassword} />

            <input type="submit" value="Iniciar sesión" />

            <p>¿Olvidaste tu contraseña? <a href="">Haz click aqui</a></p>


        </form>
      
    </div>
  )
}

export default Login
