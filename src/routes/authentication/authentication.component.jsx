import { AuthenticationContainer } from "./authentication.styles";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // console.log(user);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <AuthenticationContainer>
      {/* <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google PopUp</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
