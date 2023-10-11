import { FunctionComponent } from "react";
import { ToolbarComponent } from "@syncfusion/ej2-react-navigations";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { ISingleUser, IUser } from "../util/model/IUser";
import {
  fetchusersRequest,
  removeOdds,
} from "../redux/actions/userActions/userActions";
import { useDispatch } from "react-redux";

interface CustomToolbarComponentProps {
  setGridData: React.Dispatch<React.SetStateAction<ISingleUser[] | undefined>>;
  users: ISingleUser[];
}

const CustomToolbarComponent: FunctionComponent<
  CustomToolbarComponentProps
> = (props: CustomToolbarComponentProps) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  const removeOddsOutOfThebox = () => {
    const newUsersOdds = users.filter((user: IUser) => user.id % 2 === 0);
    dispatch(removeOdds({ users: newUsersOdds }));
  };

  const refreshData = () => {
    dispatch(fetchusersRequest({ debounce: false }));
    props.setGridData(props.users);
  };

  return (
    <ToolbarComponent>
      <div>
        <button className="e-btn e-tbar-btn" onClick={removeOddsOutOfThebox}>
          Rimuovi Dispari Out Of the box
        </button>
      </div>
      <div>
        <button className="e-btn e-tbar-btn" onClick={refreshData}>
          Refresh Users State from Redux
        </button>
      </div>
    </ToolbarComponent>
  );
};

export default CustomToolbarComponent;
