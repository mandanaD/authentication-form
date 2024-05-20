import * as Yup from "yup"

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email Address Is Not Valid.").required("Email Field Cannot Be Left Blank."),
    password: Yup.string().required("Password Field Cannot Be Left Blank.")
})
