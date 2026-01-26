import { useFormik } from "formik"

export function FormikForm(){
    function ValidateUser(userDetails){
        var error = {UserName:'',Age:'',City:'',Gender:''};

        if(userDetails.UserName.length===0){
            error.UserName = 'User Name Require'
        }else if(userDetails.UserName.length < 4){
            error.UserName = 'Name too shot'
        }else{
            error.UserName = '';
        }

        if(userDetails.Age.length===0){
            error.Age='Age Require';
        }else{
            if(isNaN(userDetails.Age)){
                error.Age = 'Age must be number';
            }else{
                error.Age = '';
            }
        }

        if(userDetails.City==='-1'){
            error.City = 'Please select city';
        }else{
            error.City = '';
        }

        return error;
    }

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            City:'',
            Gender:''
        },
        validate : ValidateUser,
        onSubmit:(user)=>{
            console.log(user);
        }
    })
    
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text"  name="UserName" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value='-1'>Select City</option>
                            <option value='Hyd'>Hyd</option>
                            <option value='Ngp'>Ngp</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" value="Male" onChange={formik.handleChange}/>Male 
                        <input type="radio" name="Gender" value="Female" onChange={formik.handleChange}/>Female
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}