import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup
        .string()
        .required("username is required")
        .min(3,"name must be at least 3 characters long"),
    email: yup
        .string()
        .email("must be a valid email address")
        .required("email is required"),
    password: yup
        .string()
        .required("a password is required")
        .min(8, "must be at least 8 characters long"),
    terms: yup.boolean(),
})

export default schema;