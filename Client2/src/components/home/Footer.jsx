import React from 'react';

const Footer = () => {
 const currentDate = new Date();

 const day = currentDate.getDate();
 const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
 const year = currentDate.getFullYear();

 // Pad the day and month with leading zeros if needed
 const formattedDay = day < 10 ? `0${day}` : day;
 const formattedMonth = month < 10 ? `0${month}` : month;

 const formattedDate = `<span class="math-inline">\{formattedDay\}\-</span>{formattedMonth}-${year}`;

 return (
   <div className="h-20 bg-gradient-to-r from-forest-green-light to-forest-green flex items-center justify-center">
     <p className="text-white font-bold">
      Kenya Forest Service {year}
     </p>
   </div>
 );
};

export default Footer;
