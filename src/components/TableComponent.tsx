import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  DetailRow,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/table.style.css";
import {
  fetchusersRequest,
  filterUsersByGender,
  removeUsersOdds,
} from "../redux/actions/userActions/userActions";
import { RootState } from "../redux/reducers/rootReducer";
import {
  childGridOptions,
  columnsDefinitions,
  editOptions,
  filterOptions,
  pageOptions,
  toolbarOptions,
} from "../util/constants/configTableConst";
import { filterOutOddUsers } from "../util/functions/general/filteringFunctions";
import { IUser } from "../util/models/IUser";
import ButtonComponent from "./ButtonComponent";
import CustomColumnGenderTemplate from "./CustomColumnGenderTemplate";
import CustomFieldTemplateComponent from "./CustomFieldTemplateComponent";
import CustomToolbarComponent from "./CustomToolbarComponent";
import { ReactComponent as Refresh } from "../assets/icons/refresh.icon.svg";
import { ReactComponent as Hide } from "../assets/icons/hide.icon.svg";
import { ReactComponent as Show } from "../assets/icons/show.icon.svg";

const TableComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [toggleGrid, setToggleGrid] = useState(true);
  const { users, filteredUsers } = useSelector(
    (state: RootState) => state.users
  );

  // Effetto per caricare i dati iniziali
  useEffect(() => {
    dispatch(fetchusersRequest({ debounce: false }));
  }, [dispatch]);

  // Funzione per gestire il click sulla toolbar
  const watchFetchData = () => {
    dispatch(fetchusersRequest({ debounce: true }));
  };
  // Effetto per aggiornare i dati quando 'users' cambia

  let grid: GridComponent | null;

  // Gestisce il click sulla toolbar
  const toolbarClickHandler = (args: any) => {
    if (grid && args.item.id === "grid_excelexport") {
      grid.excelExport();
    }
    if (grid && args.item.id === "hideUsersOdds") {
      let totalNumberOfUsers = filterOutOddUsers(users);
      dispatch(removeUsersOdds({ users: totalNumberOfUsers }));
    }
    if (grid && args.item.id === "Column") {
      grid.columnChooserModule.openColumnChooser(200, 50);
    }
    if (args.item.id === "Female" || args.item.id === "Male") {
      let gender: IUser["Gender"] = args.item.id;
      dispatch(filterUsersByGender({ gender }));
    }
  };

  const onLoad = useCallback(() => {
    if (users) {
      const emailsArray = users?.map((user) => user.Emails);
      const result = emailsArray?.map((childEmails) => ({
        emails: childEmails.filter((email) => (
          <CustomFieldTemplateComponent fieldValue={email.replace(",", " ")} />
        )),
      }));
      childGridOptions.dataSource = result;
    }
  }, [users]);

  useEffect(() => {
    if (users.length > 0) {
      onLoad();
    }
  }, [onLoad, users.length]);

  const toggleGridComponent = () => {
    setToggleGrid(!toggleGrid);
  };

  return (
    <>
      <div className="fixedHeight">
        {toggleGrid && users && (
          <>
            <CustomToolbarComponent />
            <GridComponent
              dataSource={filteredUsers.length ? filteredUsers : users}
              id="grid"
              allowExcelExport={true}
              toolbar={toolbarOptions}
              toolbarClick={toolbarClickHandler}
              ref={(g) => (grid = g)}
              allowPaging={true}
              showColumnChooser={true}
              pageSettings={pageOptions}
              editSettings={editOptions}
              childGrid={childGridOptions}
              load={onLoad}
              allowFiltering={true}
              filterSettings={filterOptions}
            >
              {/* Definizione delle colonne */}
              <ColumnsDirective>
                {columnsDefinitions.map((value: any, index: number) => (
                  <ColumnDirective
                    key={value.id}
                    field={value.fieldName}
                    headerText={value.fieldName}
                    showInColumnChooser={value.options.showColumnChooser}
                    allowFiltering={value.options.allowFiltering}
                    allowEditing={value.options.allowEditing}
                    template={(props: IUser) => (
                      <CustomFieldTemplateComponent
                        fieldValue={props[value.fieldName as keyof IUser]}
                      />
                    )}
                  />
                ))}
                <ColumnDirective
                  field="gender"
                  headerText="Gender"
                  allowFiltering={true}
                  allowEditing={false}
                  width="140"
                  template={(props: IUser) =>
                    props.Gender === "Male" ? (
                      <CustomColumnGenderTemplate gender={props.Gender} />
                    ) : (
                      <CustomColumnGenderTemplate gender={props.Gender} />
                    )
                  }
                />
              </ColumnsDirective>
              {/* Iniezione dei servizi del Grid */}
              <Inject
                services={[
                  Toolbar,
                  ExcelExport,
                  Edit,
                  Page,
                  ColumnChooser,
                  DetailRow,
                  Filter,
                ]}
              />
            </GridComponent>
          </>
        )}
        {/* Pulsante per nascondere/mostrare la Grid */}
      </div>
      <div className="centeredButtons">
        <ButtonComponent
          onClickCallBackFunction={toggleGridComponent}
          icon={true}
          typeIcon={toggleGrid ? Hide : Show}
          dataTitle={toggleGrid ? "Nascondi Tabella" : "Mostra Tabella"}
        />
        {toggleGrid && (
          <ButtonComponent
            onClickCallBackFunction={watchFetchData}
            dataTitle={"Refresh Debounced"}
            icon={true}
            typeIcon={Refresh}
          />
        )}
      </div>
    </>
  );
};

export default TableComponent;
