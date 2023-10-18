import { FunctionComponent } from "react";
interface CustomFieldTemplateProps {
  fieldValue: any;
}

const CustomFieldTemplateComponent: FunctionComponent<
  CustomFieldTemplateProps
> = (props: CustomFieldTemplateProps) => {
  function renderPropertyOrPlaceholder(value: string | number | null) {
    return value === null ? <div>--</div> : <div>{value}</div>;
  }
  return <>{renderPropertyOrPlaceholder(props.fieldValue)}</>;
};

export default CustomFieldTemplateComponent;
