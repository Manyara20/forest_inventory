import LoadingBackdrop from "../../components/globalComponents/LoadingBackdrop"
import NotificationToast from "../../components/globalComponents/NotificationToast"
import SecondAdditional from "../../components/home/SecondAdditional"


const Home = () => {
  return (
   <div>
      < LoadingBackdrop/>
      < NotificationToast/>
      < SecondAdditional/>
   </div>
  )
}

export default Home