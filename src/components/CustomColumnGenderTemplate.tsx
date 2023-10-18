import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { FunctionComponent, useCallback, useState } from "react";
import "../assets/styles/gender.filter.style.css";
import {
  fieldsForFilter,
  genderOptionsDropDown,
} from "../util/constants/configTableConst";

interface CustomColumnGenderTemplateProps {
  gender: string;
}

const CustomColumnGenderTemplate: FunctionComponent<
  CustomColumnGenderTemplateProps
> = (props: CustomColumnGenderTemplateProps) => {
  const [selectedGender, setSelectedGender] = useState(props.gender);

  const onChangeSelectGender = useCallback((event: any) => {
    const newSelectedGender: string = event.value;
    setSelectedGender(newSelectedGender);
  }, []);

  return (
    <DropDownListComponent
      id="Gender"
      fields={fieldsForFilter}
      allowFiltering={true}
      placeholder="Select a Gender"
      dataSource={genderOptionsDropDown}
      value={selectedGender}
      change={onChangeSelectGender}    
    />
  );
};

export default CustomColumnGenderTemplate;
