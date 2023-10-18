import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { FunctionComponent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "../assets/styles/gender.filter.style.css";
import { filterUsersByGender } from "../redux/actions/userActions/userActions";
import {
  fieldsForFilter,
  genderOptionsDropDown,
} from "../util/constants/configTableConst";

const GenderFilterTemplateComponent: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState("");

  // Function to filter users based on selected gender

  const onChangeSelectGender = useCallback(
    (event: any) => {
      const newSelectedGender: string = event.value;
      setSelectedGender(newSelectedGender);
      dispatch(filterUsersByGender({ gender: newSelectedGender }));
    },
    [dispatch]
  );

  return (
    <DropDownListComponent
      id="Gender"
      fields={fieldsForFilter}
      allowFiltering={true}
      placeholder="Filter by Gender"
      dataSource={genderOptionsDropDown}
      value={selectedGender}
      change={onChangeSelectGender}
    />
  );
};

export default GenderFilterTemplateComponent;
