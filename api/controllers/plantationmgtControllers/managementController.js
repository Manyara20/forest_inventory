import createError from "../../createError.js";
import { deletesubcompartment, searchSubcompartment, storeSubcompartment, updateSubcompartment } from "../../models/plantationmgtModels/subcompartmentModels.js";
import pool from "../../models/postgres.js";


const log = (message)=>{
    return console.log(message)
}
const datefunction=(val)=>{
    let dates3=val.getMonth() + 1 //jasc
    const datesss=val.getFullYear() + "-" + dates3+ "-" + val.getDate() 
    console.log(datesss)
    return  datesss

  }
export const management_insert = (req, res, next)=>{
    let date=req.body.received_date
    
    date = date.substring(0,10).split('-')
    let dates = date[1] + '-' + date[2] + '-' + date[0]
    // const day=dates.getDate()
    // const month=dates.getMonth()
    // const year=dates.getFullYear()
    console.log('startDate')
    // console.log(req.body.birthDate)
    // console.log(day)
    
    console.log(dates)
    let volume=0;
    let thin1=0;
    let thin2=0;
    let thin3=0;
    let thin4=0;
    let prune1=0;
    let prune2=0;
    let prune3=0;
    let prune4=0;
    let prune5=0;
    let coppice1= req.body.planting_year+12;
    let coppice2= coppice1+8;
    let coppice3= coppice2+8;
    let coppice4=coppice3+8;
    if (req.body.species ==='55' || req.body.species==='56' ||req.body.species === '57' || req.body.species==='58'
        ||req.body.species === '59' || req.body.species==='60') {
        volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0.45
        thin1=req.body.planting_year+7;
        thin2=thin1+8;
        thin3=thin2+5;
        thin4=0;
        prune1=req.body.planting_year+3;
        prune2= prune1+2;
        prune3= prune2+2;
        prune4= prune3+3;
        prune5=0;

      } else if (req.body.species === '19'||req.body.species==='20' ||req.body.species === '21') {
        volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0.41
        thin1=req.body.planting_year+7;
        thin2=thin1+5;
        thin3=thin2+5;
        thin4=thin3+5;
        prune1=req.body.planting_year+2;
        prune2= prune1+2;
        prune3= prune2+1;
        prune4= prune3+2;
        prune5=prune4+2;
      }else if ((req.body.species > '22' && req.body.species > '27') && req.body.mdbh>0) {
        volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0
         coppice1= req.body.planting_year+12;
         coppice2= coppice1+8;
         coppice3= coppice2+8;
         coppice4=coppice3+8;
        volume=777
      }else if (req.body.species === '70') {
        volume=0
      } 
      else {
        volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0.6
      }
   console.log('volume')
   console.log(volume)
    const values =[req.body.conservancy, req.body.county, req.body.station,
         req.body.subcompartment,req.body.species,req.body.xcordinate,
         req.body.ycordinate,req.body.area,req.body.planting_year,req.body.density,
         req.body.mdbh,req.body.mht,req.body.age,req.body.remarks,dates,volume]

    pool.query(storeSubcompartment, values,  (err, data)=> {
            if (err) {
                log(err);
                return next(createError(500, "Something Went Wrong subcompart"))
            };

           //sendConfirmationEmail(user, genToken)
           console.log(req.body.volume)
        res.status(200).json("Register Succesful. Confirmation Message subcomaprtment") 

        });
    }


    //get subcompartments

    export const searchManagement = async (req, res, next)=>{
        console.log(req.query.subcompartment)
        try {
            const {rows}= await pool.query(searchSubcompartment, [req.query.station, req.query.subcompartment])
            return res.status(200).json(rows)
        } catch (error) {
            console.log(error)
            next(createError(500, "Something Went Wrong"))
        }
    }

    export const editManagement = async (req, res, next)=>{
        console.log(req.body)
        console.log(req.params.id)
        console.log('req.params.id')
        console.log(req.body.received_date)
        const dates=req.body.received_date
        console.log(dates)
        let volume=0;
        let thin1=0;
        let thin2=0;
        let thin3=0;
        let thin4=0;
        let prune1=0;
        let prune2=0;
        let prune3=0;
        let prune4=0;
        let prune5=0;
        let coppice1= req.body.planting_year+12;
        let coppice2= coppice1+8;
        let coppice3= coppice2+8;
        let coppice4=coppice3+8;
        if (req.body.species ==='55' || req.body.species==='56' ||req.body.species === '57' || req.body.species==='58'
            ||req.body.species === '59' || req.body.species==='60') {
            volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0.45
            thin1=req.body.planting_year+7;
            thin2=thin1+8;
            thin3=thin2+5;
            thin4=0;
            prune1=req.body.planting_year+3;
            prune2= prune1+2;
            prune3= prune2+2;
            prune4= prune3+3;
            prune5=0;
    
          } else if (req.body.species === '19'||req.body.species==='20' ||req.body.species === '21') {
            volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0.41
            thin1=req.body.planting_year+7;
            thin2=thin1+5;
            thin3=thin2+5;
            thin4=thin3+5;
            prune1=req.body.planting_year+2;
            prune2= prune1+2;
            prune3= prune2+1;
            prune4= prune3+2;
            prune5=prune4+2;
          }else if ((req.body.species > '22' && req.body.species > '27') && req.body.mdbh>0) {
            volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0
             coppice1= req.body.planting_year+12;
             coppice2= coppice1+8;
             coppice3= coppice2+8;
             coppice4=coppice3+8;
            volume=777
          }else if (req.body.species === '70') {
            volume=0
          } 
          else {
            volume=(3.14*req.body.mdbh/1000*req.body.mdbh/1000)/4*req.body.mht*req.body.density*req.body.area*0.6
          }
        const values = [req.body.conservancy, req.body.county, req.body.station,
            req.body.subcompartment,req.body.species,req.body.xcordinate,
            req.body.ycordinate,req.body.area,req.body.planting_year,req.body.density,
            req.body.mdbh,req.body.mht,req.body.age,req.body.remarks,dates,volume,req.params.id]
        try {
            await pool.query(updateSubcompartment, values)
            return res.status(200).json("Update Succesfully")
        } catch (error) {
            log(error)
            return next(createError(500, "Something Went Wrong"))
        }
    }

    export const deleteManagement = async (req, res, next)=>{
        console.log('nimeficka')
        console.log(req.body)
        console.log(req.params.id)
        console.log('req.params')
        const values = [req.params.conservancy, req.params.county, req.params.station,
            req.params.subcompartment,req.params.params,req.params.xcordinate,
            req.params.ycordinate,req.params.area,req.params.planting_year,req.params.density,
            req.params.mdbh,req.params.mht,req.params.age,req.params.remarks, req.params.id]
            const status=0;
        const deleterecord = [status, req.params.id]
        try {
            await pool.query(deletesubcompartment, deleterecord)
            return res.status(200).json("Update Succesfully")
        } catch (error) {
            log(error)
            return next(createError(500, "Something Went Wrong"))
        }
    }