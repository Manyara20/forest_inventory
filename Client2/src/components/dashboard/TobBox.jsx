import {topDealUsers} from "../../constants/dashboardData"

const TopBox = () => {
  return (
    <div >
      <h1 className=" my-[20px] text-[24px]  text-white font-medium">Top Deals</h1>
      <div className>
        {topDealUsers.map(user=>(
          <div className="flex items-center justify-center mb-[30px]" key={user.id}>
            <div className=" flex gap-[20px]">
              <img  className="w-[40px] h-[40px] rounded-[50px] block 2xl:hidden" src={user.img} alt="" />
              <div className=" flex flex-col gap-[5px]">
                <span className=" text-[14px] text-white font-medium">{user.username}</span>
                <span className=" text-[12px] block 2xl:hidden  text-white font-medium">{user.email}</span>
              </div>
            </div>
            <span className="text-white font-medium pl-5">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox