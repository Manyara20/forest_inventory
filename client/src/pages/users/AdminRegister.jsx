import { Box, Container, Paper, Typography } from '@mui/material'
import './UserRegistration.css'
import { useForm } from 'react-hook-form';
import EmailInput from '../../components/reusableComponents.jsx/EmailInput';

const AdminRegister = () => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: 'onChange'});

  const watchPassword = watch("password")

  const submit = (data) =>{
    console.log(data)
  }

  return (
    <Container maxWidth='sm'>
        <Paper sx={{
            bgcolor: '#E8E8E8'
        }}>
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
                }} variant='h5'> Create User
            </Typography>
        </Box> 
        <form onSubmit={handleSubmit(submit)}>
            <div className='inputForm'>
            <label>Full Name</label>
            <input type="text" placeholder='Full Name' 
                {...register("fullname", { required: {value: true, message: "Name is Required"},
                    maxLength: {value: 100, message: "Cannot be Longer than 100 characters"}, 
                    pattern: {value: /^[A-Za-z]+$/, message: "Cam Only Contain Letters"} })} />
            {errors.fullname && <span>{errors.fullname.message}</span>}

            <label>KFS Email Adress</label>
            <input type="text" placeholder='KFS Email Adress' 
              {...register("email", { required: {value: true, message: "Email is Required"},
                      maxLength: {value: 50, message: "Cannot be Longer than 50 Characters"}, 
                      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter a Valid Email"} })}/>
              {errors.email && <span>{errors.email.message}</span>}

              <label>Password</label>
              <input type="password" placeholder='Password' 
                      {...register("password", { required: {value: true, message: "Password is Required"},
                      minLength: {value: 7, message: "Enter at Least 7 Caharcter"}, 
                      })}/>
              {errors.password && <span>{errors.password.message}</span>}

              <label>Confirm Password</label>
              <input type="password" placeholder='Confirm Password' 
                      {...register("confirm_password", { required: {value: true, message: "Confirm Password is Required"},
                      minLength: {value: 7, message: "Must be at Least 7 Character"}, 
                      validate: (value) => value === watchPassword || "The passwords do not match" })}/>
                {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
                </div>
                < EmailInput
                  type='text'
                  placeholder='Test Email Input'
                  register={register}
                  name='test_email'
                  maximLength={50}
                  ifRequired={true}
                  errors={errors}/>

                <div className='inputForm options'>
                  <label>Choose A Role</label>
                  <select multiple {...register("roles")}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                  </select>
                </div>
            <div className='submitButton'>
              <button >Create User</button>
            </div>
        </form>
        </Paper>
    </Container>
  )
}

export default AdminRegister