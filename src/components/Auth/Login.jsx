import { useFormik } from "formik";
import { TextField, Button, Stack, Box } from "@mui/material";
import Validate from "./Validate";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props(values.email, values.password);
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} justifyContent="center">
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{
              padding: "8px",
              color: "white",
              fontWeight: "bold",
            }}
            type="submit"
          >
            LOGIN
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
