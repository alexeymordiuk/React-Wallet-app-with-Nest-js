import { FC } from "react";
import { FormData } from "./Form";
import {
  FormDirection,
  HaveAccountTitle,
  Input,
  Label,
  SubmitButton,
  SwicthButton,
} from "./Form.styled";

interface FormBlocksProps {
  formData: FormData;
  setFormData: (FormData: FormData) => void;
  isRegistering: boolean;
  setIsRegistering: (value: boolean) => void;
  handleSubmit: (e: { preventDefault: () => void }) => Promise<void>;
}

const FromBlocks: FC<FormBlocksProps> = ({
  formData,
  handleSubmit,
  setFormData,
  isRegistering,
  setIsRegistering,
}) => {
  return (
    <FormDirection onSubmit={handleSubmit}>
      <Label>Email adress</Label>
      <Input
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder={"exapmle@gmail.com"}
      />
      <Label>Password</Label>
      <Input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder={"password"}
      />
      <SubmitButton value={isRegistering ? "Register" : "Login"} />
      <HaveAccountTitle>
        {isRegistering ? "Already have an account?" : "Switch to registration"}
      </HaveAccountTitle>
      <SwicthButton
        type="button"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering ? "Login" : "Registration"}{" "}
      </SwicthButton>
    </FormDirection>
  );
};

export default FromBlocks;
