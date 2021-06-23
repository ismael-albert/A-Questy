import illustration from '../assets/images'

export function Home(){
    return (<>
        <div>
            <aside>
                <img src={illustration} alt='Ilustração simbolizando perguntas e respostas' />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tira as duvidas da sua audiência em tempo-real</p>
            </aside>
        </div>
        <main>
            <div>
                <img src="{logoImg}" alt="aQ" />
                <button>
                    <img src={googleIconImg} alt="Logo Google" />
                    <p>Tire as dúvidas da sua audiência em tempo-real</p>
                    
                </button>
            </div>
        </main>
   </> )
}