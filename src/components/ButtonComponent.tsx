import { FunctionComponent } from "react";
import "../assets/styles/button.style.css";
import Icon from "./Icon";

interface ButtonComponentProps {
  onClickCallBackFunction?: Function;
  text?: string;
  className?: any;
  icon?: boolean;
  typeIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  dataTitle?: string;
}

const ButtonComponent: FunctionComponent<ButtonComponentProps> = (
  props: ButtonComponentProps
) => {
  return (
    <button
      onClick={() =>
        props.onClickCallBackFunction && props.onClickCallBackFunction()
      }
      className={props.className}
      data-title={props.dataTitle}
    >
      <div>
        {props.icon && <Icon Component={props.typeIcon!} />}
        <span>{props.text}</span>
      </div>
    </button>
  );
};

export default ButtonComponent;
