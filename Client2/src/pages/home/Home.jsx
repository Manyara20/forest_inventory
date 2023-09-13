import LoadingBackdrop from "../../components/globalComponents/LoadingBackdrop"
import NotificationToast from "../../components/globalComponents/NotificationToast"
import Additional from "../../components/home/Additional"
import GetStarted from "../../components/home/GetStarted"
import SecondAdditional from "../../components/home/SecondAdditional"


const Home = () => {
  return (
   <div>
      < LoadingBackdrop/>
      < NotificationToast/>
      < GetStarted />
      < Additional />
      < SecondAdditional/>
   </div>
  )
}

export default Home