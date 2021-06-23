import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/newRoom.scss';
import '../styles/button.scss'
import { Button } from '../components/Button';
export function NewRoom() {
    return (
    <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tira as dúvidas da sua audiência em tempo-real</p>
            </aside>
       
        <main>
            <div className="main-content">
                <img src={logoImg} alt="Logo aQuesty" />
                
                <div className="separator">
                    Criar uma nova sala
                </div>
                <form>
                    <input type="text" name="" id="" placeholder="digite o código da sala" />
                    <Button type="submit">
                        Criar sala
                        </Button>          
                </form>
                <p>
                    Quer entrar em uma sala existente? <a href="#">Clique aqui</a>
                </p>
            </div>
        </main>
    </div>
    )
}