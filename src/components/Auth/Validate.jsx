import * as Yup from "yup";

const Validate = () => {
  const validationSchema = Yup.object({
    email: Yup.string("Enter your Email")
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string("Enter your Password")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one digit")
      .matches(
        /[$@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmpassword: Yup.string("Re-Enter your Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return validationSchema;
};

export default Validate;
