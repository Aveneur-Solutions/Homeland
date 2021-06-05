import { ChangeEvent } from 'react';
import {Button} from 'semantic-ui-react'

export const buttonContainer = {
  textAlign: "center" as "center",
  transform: "translateY(30px)",
};

interface IProps {
    inputValue: string,
    placeHolder: string,
    inputName: string,
    label: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    buttonLoading: boolean
}

const VerificationForm: React.FC<IProps> = ({inputValue, placeHolder, inputName, label, onChangeHandler, buttonLoading}) => {
  return (
    <>
      <div id="uname">
        <label>
          <b>{label}</b>
        </label>
        <input
          name={inputName}
          type="text"
          placeholder={placeHolder}
          value={inputValue}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div style={buttonContainer}>
        <Button type="submit" loading={buttonLoading} color="yellow">
          Send code
        </Button>
      </div>
    </>
  );
};

export default VerificationForm;
