import SignupForm from '../../components/SignupForm'
import FormCard from '../../components/globalComponents/FormCard'
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop'
import NotificationToast from '../../components/globalComponents/NotificationToast'
import styles from '../../styles'

const SignUp = () => {
  return (
    <>
    <NotificationToast />
    <LoadingBackdrop/>
    <div className={`${styles.flexCenter}`}>
        <FormCard>
            < SignupForm />
        </FormCard>
    </div>
    </>
  )
}

export default SignUp