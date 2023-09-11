import { Box, Card, Container, Paper, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { useForm } from 'react-hook-form';
import React from 'react'
import PasswordInput from '../../components/reusableComponents.jsx/PasswordInput';
import NameInput from '../../components/reusableComponents.jsx/NameInput';
import SelectInputField from '../../components/reusableComponents.jsx/SelectInputField';
import { updateData } from '../../actions/fetchMethods';
import { useValue } from '../../context/ContextProvider';

const conservancies = [
    {label: "Muranga", value: "Value One"},
    {label: "Kisumu", value: "Value One"},
    {label: "Label One", value: "Value One"},
]


// function subcompartment() {
const SubCompartment=()=>{
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: 'onChange'});
    const {dispatch}=useValue();
    const submit = (data)=>{
        updateData('post', '/subcompartment', data, dispatch)
      }
    
    return (
        <Container sx={{width:'2000px', bgcolor: 'red'}}>
            <paper elevation={1}> 
            <Box sx={{bgcolor: 'green'}}>   </Box>
            </paper>
       <Typography sx={{color:'white'}}>  subcompartment Restration</Typography>
       <Box>
            <Card sx={{ 
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                paddingBottom: '20px',
                border: 'none',
                boxShadow: 'none',
                color: 'red',
                bgcolor: 'orange'}}>
            <form onSubmit={handleSubmit(submit)}>
            <div className='inputForm'>
            <SelectInputField
                label="Conservancy"
                name='conservancy'
                register={register}
                errors={errors}
                ifRequired={true}
                options={conservancies} />

<SelectInputField
                label="County"
                name='county'
                register={register}
                errors={errors}
                ifRequired={true}
                options={conservancies} />

            <label></label>
            <SelectInputField
                label="Forest Station"
                name='fstation'
                register={register}
                errors={errors}
                ifRequired={true}
                options={conservancies} />
            <SelectInputField
                label="Species"
                name='species'
                register={register}
                errors={errors}
                ifRequired={true}
                options={conservancies} />

            <label></label>
            {/* <input type="text" placeholder='Full Name as it appears on you ID' 
                {...register("fullname", { 
                    required: {value: true, message: "Name is Required"},
                    maxLength: {value: 100, message: "Cannot be Longer than 100 characters"}, 
                    pattern: {value: /^[A-Za-z]+$/, message: "Cam Only Contain Letters"} })} />
             */}
             < NameInput
                label="Sub Compartment"
                name="subcompart"
                required={true}
                maximLength={null}
                minLength={null}
                errors={errors}
                register={register}
             />
             < NameInput
                label="Remarks"
                name="remarks"
                required={true}
                maximLength={null}
                minLength={null}
                errors={errors}
                register={register}
             />
             {/* <PasswordInput
                  name="password"
                  placeholder="Enter Password"
                  register={register}
                  ifRequired={true}
                  errors={errors}
                  maximLength={20}
                  minLength={7}
                  label="Password"
                    /> */}
        </div>
        <div className='submitButton'>
              <button type='submit'>Submit </button>
            </div>
</form>
                </Card>
                </Box>
        </Container>
      )

}
 
// }

export default SubCompartment