import { ErrorMessage, Field, Form, Formik } from "formik";

export function FormikComponentDemo(){

    return(
        <div>
            <h3>formik component demo</h3>
            <Formik>
                {
                    formik =><Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" /></dd>
                            <dd><ErrorMessage name="UserName" /></dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" /></dd>
                            <dd><ErrorMessage name="Mobile" /></dd>
                        </dl>
                        <button disabled={(formik.isValid?false : true)}>Register</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}