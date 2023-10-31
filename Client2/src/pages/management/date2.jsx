import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { subYears, isBefore } from "date-fns/fp";

import styles from '../../styles';

import "./date.css";

import "react-datepicker/dist/react-datepicker.css";
import LoadingBackdrop from "../../components/globalComponents/LoadingBackdrop";
import NotificationToast from "../../components/globalComponents/NotificationToast";
import { useQuery } from "@tanstack/react-query";
import SelectInput from "../../components/formComponents/SelectInput";
import SubmitButton from '../../components/formComponents/SubmitButton';
import { useValue } from "../../context/ContextProvider";
import NameInput from "../../components/formComponents/NameInput";
import NumericalInput from "../../components/formComponents/NumericalInput";
import newRequest from "../../utils/newRequest";
import { handleError, updateData } from "../../actions/fetchMethods";
import { useLocation, } from "react-router-dom";
import { useEffect } from "react";

const sub2Years = subYears(2);

const isOlderThan2Years = (date) =>
  isBefore(sub2Years(new Date()), date) || "Date is not older than 2 years";

const Blog= () => { 
    
    const { control}= useForm({});
   

  return (
   
    <>
    <label className={`${styles.formLabels}`}>Date</label>
    <Controller
          name={"birthDate"}
          control={control}
          defaultValue={new Date()}
          rules={{ validate: { isOlderThan2Years } ,required: true}}
                  
          render={({ field: { onChange, value } }) => {
            return (
                
              <DatePicker
              disableFuture
              dateFormat="yyyy-MM-dd"
              // dateFormat={"YYYY-MM-DD"}              
              onChange={onChange}
              selected={value}
              placeholderText="Enter your birth date"
              />
            );
          }}
        />
  
</>
        
  );
}
export default Blog;