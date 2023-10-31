import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 


const DateField = () => { 
const [value, setValue] = useState({ 
startDate: null,
endDate: null 
}); 

const handleValueChange = (newValue) => {
console.log("newValue:", newValue); 
setValue(newValue); 
} 

return (
<Datepicker 

useRange={false} 
asSingle={true} 
value={value} 
onChange={handleValueChange} 


// toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 
// focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
// popoverDirection="up" 
// containerClassName="max-w-sm" 



// calendarPosition="bottom-center"

toggleClassName="relative bg-blue-3000 rounded-r-lg text-white right-0 h-full px-8 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 

containerClassName={{}}

classNames=" absolute mb-3"
popoverDirection="down"

placeholder="vdffd"

inputClassName="rounded-md focus:ring-0 font-normal bg-green-100 dark:bg-green-900 dark:placeholder:text-green-100" 
   
/> 
);
}; 
export default DateField;