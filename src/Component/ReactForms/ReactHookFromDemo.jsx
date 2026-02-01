import { useFieldArray, useForm } from "react-hook-form";

export function ReactHookFormDemo(){
    const{register,handleSubmit, control,formState:{errors}} = useForm({
        defaultValues:{
            files: [{file: null}]
        }
    });

    const{fields,append,remove} = useFieldArray({
        control,
        name: "files"
    });

    const submit = (user)=>{
        console.log(user);
    }
    return(
        <div className="constainer-fluid">
            <h3>React hook form</h3>
            <form className="" onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" {...register("UserName",{required:true,minLength:4})}/></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")?<span>User name required</span>:<span></span>
                            && (errors.UserName?.type==="minLength")?<span>Name too short</span>:<span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" {...register("Mobile",{required:true,pattern:/\+91\d{10}/})}/></dd>
                    <dd className="text-danger">{
                        (errors.Mobile?.type==="required")?<span>Required Number</span> : <span></span>
                        &&
                        (errors.Mobile?.type==="pattern")?<span>Invalid moblile</span>:<span></span>
                    }
                    </dd>
                    <dt>Upload photo</dt>
                    <dd>
                        
                        {fields.map((field,index) =>(
                            <div key={field.id} style={{marginBlock:"5px"}}>
                                <input type="file" {...register(`files.${index}.file`)}/>

                                {fields.length > 1 && (
                                    <button type="button" onClick={() =>remove(index)} className="btn bi vi-trash d-inline">remove</button>
                                )}
                            </div>
                        ))}
                        <button className="btn d-inline btn-link" onClick={()=>append({file:null})}>Upload more</button>
                        
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}