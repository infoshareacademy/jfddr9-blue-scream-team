export const getPassword = (e: any) => {
  const form = e.target;
  const { password, password1 } = form;

  const formData = {
    password: password.value,
    password1: password1.value,
  };

  return formData.password === formData.password1;
};
