import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
    return (<>
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tira as dúvidas da sua audiência em tempo-real</p>
            </aside>
        </div>
        <main>
            <div>
                <img src="{logoImg}" alt="aQuesty" />
                <button>
                    
                    <img src={googleIconImg} alt="Logo Google" />
                    crie sua sala com o google
                    
                    
                </button>
                <div>
                    ou entre em uma sala
                </div>
                <form>
                    <input type="text" name="" id="" placeholder="digite o código da sala" />
                    <button type="submit">
                        Entra na sala
                        </button>          
                </form>
            </div>
        </main>
   </> )
}