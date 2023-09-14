import createError from "../createError";

export const checkAuthentication=(req, res, next) =>{
    if (req.session && req.session.user) {
      next();
    } else {
      next(createError(401, "Not Authorized"))
    }
  }


  export const checkPermission=(permissionId)=>{
    return (req, res, next) => {

      if(!(req.session && req.session.user && req.session.user.roles)){
        return next(createError(401, 'Not Authorized'))
      }
      if (req.session && req.session.user && req.session.user.roles) {
        const q ={
            text: "SELECT ARRAY_AGG(rp.permission_id) AS permissions FROM model_has_roles ur JOIN role_has_permissions rp ON ur.role_id = rp.role_id WHERE ur.model_id = $1",
            values: [req.session.user.id]
        }

        pool.query(q, (err, data)=>{
            if (err) {
                console.log(err);
                return next(500, "Something Went Wrong")
            }
            if (data.rows.length===0){
                return next(createError(401, "Not Authorized"));
            }
            
            const allowed = (element, permissionToCheck)=>{
                return element.some((item) => (item === permissionToCheck))
            }

            const isAllowed= allowed(data.rows[0].permissions, permissionId)
            if (!isAllowed) return res.status(404).json("Not Authorized to perform the Function")
            next();
        })
      } 
    };
  }
  