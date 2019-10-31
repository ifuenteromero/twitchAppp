import React, {useEffect, useState } from 'react';

const GoogleAuth = () => {
    //En la consola para hacer sign in gapi.auth2.getAtuthInstance().signIn() y signOut
    const [isSignedIn, setIsSignedIn] = useState(null)
    
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '585727853238-jp3ct0vt9lli5okgqlrbutnh073ei03e.apps.googleusercontent.com',
                scope: 'email'
            }).then((e) => {
                const auth = window.gapi.auth2.getAuthInstance();
                //setIsSignedIn(auth.isSignedIn.get());
                onAuthChange()
                auth.isSignedIn.listen(onAuthChange);
            });
        });
    },[]);

    const onAuthChange = (e) => {
        setIsSignedIn(e)
       // setIsSignedIn(auth.isSignedIn.get())
    }

    const onSignIn = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    };

    const onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    const renderAuthButton = () => {
        if (isSignedIn===null){
            return null
            //<div> I don't know if we are signed in</div>
        } else if (isSignedIn) {
            return (
                <button className="ui red google button" onClick={onSignOut}>
                    <i className="google icon" />
                    Sign Out
                </button>
                //<div> I am sign in </div>
            );
        } else {
            return  ( 
            <button className="ui red google button" onClick={onSignIn}>
                <i className="google icon" />
                Sign In with Google
            </button>
        )
                //<div> i am not sign in</div>
        }
       
    }


    return ( 
        <div>  {renderAuthButton()}</div>
     );
}
 
export default GoogleAuth;