import LoginForm from '../../components/LoginForm'
import FormCard from '../../components/globalComponents/FormCard'
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop'
import NotificationToast from '../../components/globalComponents/NotificationToast'
import styles from '../../styles'

const Login = () => {
  return (
    <>
    <LoadingBackdrop />
    <NotificationToast />
    <div className={`${styles.flexCenter}`}>
        <FormCard>
            < LoginForm />
        </FormCard>
    </div>
    </>
  )
}

export default Login