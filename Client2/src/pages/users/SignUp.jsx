import SignupForm from '../../components/SignupForm'
import FormCard from '../../components/globalComponents/FormCard'
import styles from '../../styles'

const SignUp = () => {
  return (
    <div className={`${styles.flexCenter}`}>
        <FormCard>
            < SignupForm />
        </FormCard>
    </div>
  )
}

export default SignUp