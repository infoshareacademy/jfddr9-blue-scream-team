import styled from "styled-components";
import { useNavigate, useHref } from "react-router-dom";
import { SignInButton } from "./SignInButton";
import { RegisterButton } from "./RegisterButton";

export function AuthButtons() {
  const href = useHref();
  const path = href.startsWith("#") ? href.slice(1) : href;
  console.log(href);

  if (path === "/login" || path === "/register") {
    return null;
  }
  if (path === "/") {
    return (
      <>
        <SignInButton />
        <RegisterButton />
      </>
    );
  }

  return <span>Tu bedzie przycisk wyloguj</span>;
}
