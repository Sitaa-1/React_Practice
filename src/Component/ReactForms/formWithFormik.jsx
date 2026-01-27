import { useFormik } from "formik"

export function FormikForm(){
    function ValidateUser(userDetails){
        var errors = {UserName:'',Age:'',City:'',Gender:''};

        if(userDetails.UserName.length===0){
            errors.UserName = 'User Name Require'
        }else if(userDetails.UserName.length < 4){
            errors.UserName = 'Name too shot'
        }
        
        if(userDetails.Age.length===0){
            errors.Age='Age Require';
        }else{
            if(isNaN(userDetails.Age)){
                errors.Age = 'Age must be number';
            }
        }

        if(userDetails.City==='-1'){
            errors.City = 'Please select city';
        }

        if(userDetails.Gender===''){
            errors.Gender = 'select option';
        }else{
            errors.Gender='';
        }

        return errors;
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
                    <dd><input type="text" name="UserName" onChange={formik.handleChange}/></dd>
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
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}