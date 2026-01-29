import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export function FormikComponentDemo(){

    return(
        <div>
            <h3>formik component demo</h3>
            <Formik initialValues={{UserName:'',Mobile:''}} 
                    validationSchema={yup.object({UserName:yup.string().required('username required').min(4,'name too short'), Mobile:yup.string().required('mendetory field').matches(/\+91\d{10}/)})} onSubmit={(user)=>console.log(user)}>
                {
                    formik =><Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" /></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                        </dl>
                        <button disabled={(formik.isValid?false : true)}>Register</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}