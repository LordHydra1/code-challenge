import { ToolbarComponent } from "@syncfusion/ej2-react-navigations";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Refresh } from "../assets/icons/refresh.icon.svg";
import { ReactComponent as UserSlash } from "../assets/icons/user.slash.icon.svg";
import "../assets/styles/custom.toolbar.style.css";
import {
  fetchusersRequest,
  removeUsersOdds,
} from "../redux/actions/userActions/userActions";
import { RootState } from "../redux/reducers/rootReducer";
import { filterOutOddUsers } from "../util/functions/general/filteringFunctions";
import ButtonComponent from "./ButtonComponent";
import GenderFilterTemplateComponent from "./GenderFilterTemplateComponent";

const CustomToolbarComponent: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  const removeOddsOutOfThebox = () => {
    let totalNumberOfUsers = filterOutOddUsers(users);
    dispatch(removeUsersOdds({ users: totalNumberOfUsers }));
  };

  const refreshData = () => {
    dispatch(fetchusersRequest({ debounce: false }));
  };

  return (
    <ToolbarComponent>
      <div>
        <h2>Custom Toolbar</h2>
        <ButtonComponent
          onClickCallBackFunction={removeOddsOutOfThebox}
          icon={true}
          typeIcon={UserSlash}
          dataTitle={"Remove Users Odds"}
        />
        <ButtonComponent
          onClickCallBackFunction={refreshData}
          icon={true}
          typeIcon={Refresh}
          dataTitle="Refresh Users"
        />
        <GenderFilterTemplateComponent />
      </div>
    </ToolbarComponent>
  );
};

export default CustomToolbarComponent;
