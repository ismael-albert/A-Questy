import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useContext } from 'react'
import { authContext } from '../App'

export function NewRoom(){
const { user } = useContext(authContext)

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração sombolizando perguntas e respostas" />
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>


            <main>
                <div className="main-content">
                <img src={logoImg} alt="letmeask" />
               <h1>{user?.name}</h1>
               <h2>criar uma nova sala</h2>

                <form>
                    <input 
                    type="text" 
                    placeholder="Nome da sala" 
                    />

                    <Button type="submit">
                        Criar Sala
                    </Button>
                </form>
                <p>
                    Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                </p>
                </div>
            </main>
        </div>
    )

}