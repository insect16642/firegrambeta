import AppRouter from "components/Router";
import React, { useEffect, useState } from "react";
import { authService } from "FBFireGram"

function App() {
  const [init, setInit] = useState(false);
        console.log(authService.currentUser);
  //로그인이 되어 있는가?
  const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  authService.onAuthStateChanged((user) => {
    if(user){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setInit(true);
  }
  );
}, [])
 return (
  <>  

  {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "LogIning"}
  <footer>&copy; FireGram {new Date().getFullYear()}</footer>
  </>
 );
}

export default App;
