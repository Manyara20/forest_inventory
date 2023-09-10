import { useValue } from "../../context/ContextProvider";
import Alert from "./Alert"

const NotificationToast = () => {

  const {state: {alert}}= useValue();

  if(!(alert.open===true)) return null

  return (
   <div className="fixed top-0 left-0 w-[80%] h-20 flex items-center justify-end z-40">
        < Alert />
   </div>
  )
}

export default NotificationToast