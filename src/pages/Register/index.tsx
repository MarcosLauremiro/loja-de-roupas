import { StyledContainer, StyledMain, HeaderAdmin, FooterAdmin } from './style';
import { InputComponent } from '../../components/Input';
import pictureCadaster from '../../assets/pictureCadasterPage.svg'
import { BiArrowBack } from 'react-icons/bi'
import { registerSchema, TRegisterData } from './RegisterSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';


export const RegisterPage = ()=> {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema)
    })
    const { registerNewUser } = useContext(GlobalContext)
    const submit = (formData: TRegisterData) => {
        registerNewUser(formData)
    }

    return (
    <>
        <HeaderAdmin>  <img src={logo} alt='Logo'  onClick={()=>{navigate('/')}} />  </HeaderAdmin>
        <StyledMain>
            <StyledContainer>
                <div className='boxOne'>
                    <img src={pictureCadaster} alt='foto de duas mulheres' />
                </div>
                <div className='boxTwo'>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className='boxForm' onClick={() => { navigate('/login') }} >
                            <BiArrowBack />
                            <span> VOLTAR </span>
                        </div>
                        <h3> CADASTRAR-SE </h3>

                        <p>Seja bem vindo, administrador !</p>
                        <InputComponent type='text' placeholder='NOME' {...register('name')} />
                        {errors.name?.message}
                        <InputComponent type='text' placeholder='E-MAIL'  {...register('email')} />
                        {errors.email?.message}
                        <InputComponent type='password' placeholder='SENHA'  {...register('password')} />
                        {errors.password?.message}
                        <InputComponent type='password' placeholder='CONFIRMAR SENHA' {...register('confirmPassword')} />
                        {errors.confirmPassword?.message}
                        <div>
                            <button type='submit' className='buttonRegister' > CADASTRAR-SE </button>
                        </div>
                    </form>
                </div>
            </StyledContainer>
        </StyledMain>
        <FooterAdmin>  <p> Todos os direitos reservados - Kenzie Academy Brasil </p>  </FooterAdmin>
    </>
    );

}






