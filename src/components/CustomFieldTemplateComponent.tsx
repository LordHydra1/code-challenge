import { FunctionComponent, useEffect } from "react";
interface CustomFieldTemplateProps {
  fieldValue: string | number | null | Array<any>;
}

const CustomFieldTemplateComponent: FunctionComponent<
  CustomFieldTemplateProps
> = (props: CustomFieldTemplateProps) => {
  const renderPropertyOrPlaceholder = (
    value: string | number | null | Array<any>
  ) => {
    if (value === null) {
      return <div>--</div>;
    } else if (Array.isArray(value) && value.length === 0) {
      return <div>--</div>; // Value is an empty array
    } else {
      return <div>{value}</div>;
    }
  };

  return <>{renderPropertyOrPlaceholder(props.fieldValue)}</>;
};

export default CustomFieldTemplateComponent;
