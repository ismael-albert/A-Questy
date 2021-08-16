import { createContext } from "react";
import { BrowserRouter ,Route } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { useState } from "react";
import { auth, firebase } from "./services/firebase";

export const authContext = createContext({} as any);

function App() {
  const [user, setUser] = useState()

function signInWithGoogle() {

  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(result => {
     if (result.user){
       const { displayName, photoURL, uid } = result.user

       if (!displayName || !photoURL){
         throw new Error('Missing information from Google Account.');
       }


     }
  }).catch(err=> {
      console.log("erro na validação do google")
  })

}

  return (
    <BrowserRouter>
    <authContext.Provider value={{ value, setValue }}>
       <Route path="/" exact component={Home} />
       <Route path="/rooms/new" component={NewRoom} />
      </authContext.Provider>
    </BrowserRouter>

  
  
  );
}

export default App;
