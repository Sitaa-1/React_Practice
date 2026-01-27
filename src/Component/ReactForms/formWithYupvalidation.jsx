import { useFormik } from "formik";
import * as yup from "yup";

export function FormYupDemo(){

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            Mobile:'',
            City:'',
            Gender:''
        },
        validationSchema:yup.object({
            UserName:yup.string().required('User Name Required').min(4,'Name is too short'),
            Age:yup.number().required('Age required').min(15,'minimum age 15').max(80,'max age 80'),
            Mobile:yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile number')
        }),
        onSubmit:(user)=>{
            console.log(user);
        }
    })

    return(
        <div>
            <h3>Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange}>
                            <option>Select</option>
                            <option>Hyd</option>
                            <option>Ngp</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" value="male" onChange={formik.handleChange}/>Male 
                        <input type="radio" name="Gender" value="female" onChange={formik.handleChange}/>Female
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}