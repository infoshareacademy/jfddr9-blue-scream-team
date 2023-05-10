export const getFormData = (e: any) => {
  const form = e.target;
  const { name, lastName, email, password } = form;

  const formData = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  return formData;
};
