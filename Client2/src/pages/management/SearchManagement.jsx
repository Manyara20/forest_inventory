import { useForm } from "react-hook-form"
import LoadingBackdrop from '../../components/globalComponents/LoadingBackdrop'
import NotificationToast from '../../components/globalComponents/NotificationToast'
import { useValue } from "../../context/ContextProvider";
import NameInput from "../../components/formComponents/NameInput";
import { useQuery } from "@tanstack/react-query";
import { fetchDataReactQuerry } from "../../actions/fetchMethods";
import { useMemo } from "react";
import { tableHeadings } from "../../constants/tableHeadings";
import DaisyTable from "../../components/dashboard/DaisyTable";

const SearchManagement = () => {

    const { dispatch}=useValue()

    const { register, watch, handleSubmit, formState: { errors } } = useForm({mode: 'onSubmit'});

    const { data: searchResults = [], refetch } = useQuery(
      ["management", { station: watch('station'), subcompartment: watch('subcompartment') }],
      () => {
        return fetchDataReactQuerry(dispatch, `/managementSearch?station=${watch('station')}&subcompartment=${watch('subcompartment')}`);
      },
      {
        enabled: false,
        staleTime: 10*1000,
        cacheTime: 30*1000,
      }
    );

    const memoizedHeadings = useMemo(()=>tableHeadings, []);

    const memoizedSearchResults = useMemo(() => searchResults, [searchResults]);

    const log =()=>{
      console.log("I am")
    }

    const actions = useMemo(()=>[
        {label:"Delete", onClick: log},
    ],[])

    const linkActions = useMemo(()=>[
      {label:"Edit", to: '/editManagement'},
    ],[])

    const submit = () => {
      refetch(); 
    };
  return (
    <div className="min-h-screen">
    <LoadingBackdrop />
    <NotificationToast />
    <div className="mx-2 border-4 rounded-2xl bg-white py-2 my-2 w-11/12">
        <form onSubmit={handleSubmit(submit)}>
            <div className="grid grid-cols-12 gap-1 items-center justify-center">
            <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 w-full  justify-left flex-col items-center px-4">
            <NameInput
              placeholder='Enter Forest Station'
              name="station"
              label=''
              maximLength={60}
              minLength={3}
              ifRequired={false}
              errors={errors}
              register={register}/>
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 w-full  justify-left flex-col items-center px-4">
            <NameInput
                placeholder='Enter Subcompartment Name'
                name="subcompartment"
                label=''
                maximLength={60}
                minLength={3}
                ifRequired={false}
                errors={errors}
                register={register}/>
            </div>
            <div className=" col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-2 w-full rounded-full flex justify-center flex-col items-center px-2">
                  <button className="btn bg-custom-blue text-white font-bold w-full btn-circle">Search</button>
              </div>
            </div>
            </form> 
        </div>
        <div>
         < DaisyTable rowData={memoizedSearchResults} headings={memoizedHeadings} actions={actions} linkActions={linkActions} />
        </div>
        </div>
  )
}

export default SearchManagement