import { useForm } from "react-hook-form";

export function ReactHookFormDemo(){
    const{register,handleSubmit,formState:{errors}} = useForm();

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
                        <input type="file" />
                        <button className="btn d-inline btn-link" >Upload more</button>
                        <button className="btn bi vi-trash d-inline"></button>
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}