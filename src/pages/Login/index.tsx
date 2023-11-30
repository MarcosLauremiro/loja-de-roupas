import { StyledMain,StyledContainer,FooterAdmin,HeaderAdmin } from './style';
import pictureLogin from  '../../assets/pictureLoginPage.svg'
import { InputComponent } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { TLoginData, loginSchema } from './LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import logo from '../../assets/logo.png'
import {  useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors} } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    })

    const { loginAdm } = useContext(GlobalContext)

    const  submit = (formData:TLoginData)=>{
        loginAdm(formData)
    }

    return ( 
    <>
      <HeaderAdmin> <img src={logo} alt='logo marca da empresa' onClick={()=>{navigate('/')}}   />  </HeaderAdmin>
        <StyledMain>
            <StyledContainer>
               <div className='boxOne'>
                  <img src={pictureLogin} alt='foto de duas mulheres' />
               </div>
               <div className='boxTwo'>
                    <form onSubmit={handleSubmit(submit)}>

                        <h3>ENTRAR</h3>
                        <InputComponent type='text'  placeholder='E-mail' {...register('email')} />
                        {errors.email?.message}                                                             
                        <InputComponent type='password' placeholder='Senha' {...register('password')} />
                        {errors.password?.message}
                        <div>
                            <button className='buttonAcess' type='submit' > ACESSAR </button>
                            <button className='buttonRegister' type='button' onClick={()=>{navigate('/register')}} > CADASTRE-SE </button>
                        </div>


                    </form>
               </div>   
            </StyledContainer>
        </StyledMain>
        <FooterAdmin>  <p> Todos os direitos reservados - Kenzie Academy Brasil </p> </FooterAdmin>
    </> 
    );
}
