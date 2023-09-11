
const Footer = () => {

  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = currentDate.getFullYear();

  // Pad the day and month with leading zeros if needed
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    
  return (
    <div className=" h-20 bg-gradient-to-l from-custom-blue to-custom-blue via-middle-green flex items-center justify-center">
        <p className=" font-bold text-purple-900 ">
        {`Copyright @ ${formattedDate} All Rights Reserved BY | Kenya Forest Service`}
        </p>
    </div>
  )
}

export default Footer