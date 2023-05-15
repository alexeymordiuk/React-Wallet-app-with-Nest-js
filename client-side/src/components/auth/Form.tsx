import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  loginUserAction,
  registerSuccess,
  registerUser,
} from "../../store/api/auth.api";
import { checkIsLoggedIn, logOut } from "../../api/user.api";
import { User } from "../../interface/user.interface";
import { useNavigate } from "react-router-dom";
import { FormTitle, FormWrraper} from "./Form.styled";
import FromBlocks from "./FromBlocks";
import LogoutBlock from "../ui/logout-block/LogoutBlock";

export interface FormData {
  email: string;
  password: string;
}

const Form: FC = () => {
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isRegistering, setIsRegistering] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { email, password } = formData;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInUser = localStorage.getItem("loggedInUser");
  const userId = loggedInUser ? JSON.parse(loggedInUser).email : null;

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const { payload: newUser } = await dispatch(
          registerUser({ email, password })
        );
        dispatch(registerSuccess(newUser));
      } else {
        const { payload: user } = await dispatch(
          loginUserAction({ email, password })
        );
        dispatch(loginSuccess(user));
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        setIsLoggedIn(true);

        navigate("/transaction");
        if (user) {
          const isLoggedIn = await checkIsLoggedIn(user.id);
          console.log("User is logged in:", isLoggedIn);
        } else {
          console.log("User not found");
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setIsRegistering(false);
      } else {
        console.error(error);
      }
    }
    setFormData({ email: "", password: "" });
  };

  const handleLogout = async (): Promise<void> => {
    try {
      if (user) {
        await logOut(user.id);
        console.log(user.id);
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("loggedInUser");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <FormWrraper>
      {isLoggedIn ? (
        <LogoutBlock
          onClick={handleLogout}
          titleBtn={"Log out"}
          title={"You are login"}
          email={userId}
        />
      ) : (
        <>
          <FormTitle>
            {isRegistering ? (
              <h1 style={{ color: "#ffffff" }}>Registration</h1>
            ) : (
              <h1 style={{ color: "#ffffff" }}>Login</h1>
            )}
          </FormTitle>
          <FromBlocks
            formData={formData}
            setFormData={setFormData}
            isRegistering={isRegistering}
            setIsRegistering={setIsRegistering}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </FormWrraper>
  );
};

export default Form;
