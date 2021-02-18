
import { useEffect } from 'react';
import {LoginContainer, Input, Button, LoginFields, BackgroundImage, Label, StyledLink} from '../../components/Login/StyledComponents/index'; 
import logoImage from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {

  useEffect(() => {
   
  }, []);

  return (
    <LoginContainer>
        <BackgroundImage />
        <LoginFields>
          <img width={180} height={50} alt='logo' src={logoImage} style={{margin: 15, marginRight:50}}/>
          <h2>Entre ou Registre-se</h2>
          <Link to='/register'>
            <StyledLink>Ainda não tenho uma conta</StyledLink>
          </Link>
          <Label>Login</Label>
          <Input placeholder='email@exemplo.com'/>
          <Label>Senha</Label>
          <Input placeholder='Digite sua senha' type='password'/>
          <Link to='/main'>
            <Button>LOGIN</Button>
          </Link>
      </LoginFields>
    </LoginContainer>
  );
}

export default Login;