export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.partner_email) {
    errors.partner_email = "Partner email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.partner_email)) {
    errors.partner_email = "Partner email address is invalid";
  }
  return errors;
}
