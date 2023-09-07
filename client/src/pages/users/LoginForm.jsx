import { Box, Container, Paper, Typography } from '@mui/material'
import './UserRegistration.css'
import { useForm } from 'react-hook-form';
import EmailInput from '../../components/reusableComponents.jsx/EmailInput';
import PasswordInput from '../../components/reusableComponents.jsx/PasswordInput';
import SnackBar from '../../components/globalComponents/Notification';
import { login } from '../../actions/userActions';
import { useValue } from '../../context/ContextProvider';

const LoginForm = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

  const {dispatch} = useValue();

  const submit = (data) =>{
    login(data, dispatch)
  }

  return (
    <>
    <SnackBar/>
    <Container maxWidth='sm' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Paper sx={{ bgcolor: '#E8E8E8', width: '100%', pt: 2, pb: 3 }}>
        <Box sx={{
          alignItems:'center',
          justifyContent:'start',
          display: 'flex',
          paddingY: '10px',
          paddingX: '10px',
          width: '100%',
        }}>
            <Typography sx={{
                color: 'black',
                fontWeight: 600,
                }} variant='h5'> Login
            </Typography>
        </Box> 
        <form onSubmit={handleSubmit(submit)}>
            <div className='inputForm'>
                </div>
                < EmailInput
                  type='text'
                  label="Email"
                  placeholder='KFS Email'
                  register={register}
                  name='email'
                  maximLength={50}
                  ifRequired={true}
                  errors={errors}/>

                <PasswordInput
                  name="password"
                  placeholder="Enter Password"
                  register={register}
                  ifRequired={true}
                  errors={errors}
                  maximLength={20}
                  minLength={7}
                  label="Password"
                    />
            <div className='submitButton'>
              <button >Login </button>
            </div>
        </form>
        </Paper>
    </Container>
    </>
  )
}

export default LoginForm