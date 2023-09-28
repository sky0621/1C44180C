import LoginForm from "@/app/(unauthenticated)/login/_LoginForm";
import LoginTitle from "@/app/(unauthenticated)/login/_LoginTitle";

const LoginPage = () => {
  return (
    <>
      <div>
        <LoginTitle />
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
