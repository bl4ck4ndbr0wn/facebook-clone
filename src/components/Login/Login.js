import Button from '@material-ui/core/Button';
import React from 'react';
import {userConstants} from '../../_constants';
import {auth, provider} from '../../firebase';
import {useStateValue} from '../../StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user));
        dispatch({
          type: userConstants.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message))

  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
