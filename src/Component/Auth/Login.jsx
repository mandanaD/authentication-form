import auth from "../../assets/login.png"
import "./Login.css"
import {LoginSchema} from "../../Validation/Login.js";
import {Formik, Field, Form} from "formik";
import { toast } from "react-toastify";

const Login = () => {
    const sendLoginValue = (value) => {
        console.log(value)
        toast.success("Logged In Successfully!");

    }

    return (
        <div className="login-container">
            <div className="login">
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}

                    validationSchema={LoginSchema}
                    onSubmit={(value) => {
                        sendLoginValue(value)
                    }}>
                    {({errors, touched}) => (
                        <Form className={"login-text"}>
                            <h1 className={"l-s"}>welcome back</h1>
                            <p className={"text-container-p text-gray"}>welcome back please enter your details.</p>
                            <div className={`form-field ${(touched.email && errors.email) && "red-outline"}`}>
                                <Field type="email" name={"email"} placeholder={"Email"}/>
                                {
                                    (touched.email && errors.email) && (
                                        <div className={"error-massage"}>{errors.email}</div>
                                    )
                                }
                            </div>
                            <div className={`form-field ${(touched.password && errors.password) && "red-outline"}`}>
                                <Field type="password" name={"password"} placeholder={"Password"}/>
                                {
                                    (touched.password && errors.password) && (
                                        <div className={"error-massage"}>{errors.password}</div>
                                    )
                                }
                            </div>
                            <button type={"submit"}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className={"login-img"}>
                    <img src={auth} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Login;
