import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  DetailRow,
  Edit,
  ExcelExport,
  ExcelQueryCellInfoEventArgs,
  Filter,
  GridComponent,
  Inject,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { ClickEventArgs } from "@syncfusion/ej2-react-navigations";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Hide } from "../assets/icons/hide.icon.svg";
import { ReactComponent as Refresh } from "../assets/icons/refresh.icon.svg";
import { ReactComponent as Show } from "../assets/icons/show.icon.svg";
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
import { IColumnsDefinitions } from "../util/models/IColumnsDefinitions";
import { IUser } from "../util/models/IUser";
import ButtonComponent from "./ButtonComponent";
import CustomColumnGenderTemplate from "./CustomColumnGenderTemplate";
import CustomFieldTemplateComponent from "./CustomFieldTemplateComponent";
import CustomToolbarComponent from "./CustomToolbarComponent";

const TableComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [toggleGrid, setToggleGrid] = useState(true);
  const { users, filteredUsers } = useSelector(
    (state: RootState) => state.users
  );
  let grid: GridComponent | null;

  // Effetto per caricare i dati iniziali
  useEffect(() => {
    dispatch(fetchusersRequest({ debounce: false }));
  }, [dispatch]);

  const watchFetchData = () => {
    dispatch(fetchusersRequest({ debounce: true }));
  };

  // Gestisce il click sulla toolbar
  const toolbarClickHandler = (args: ClickEventArgs) => {
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

  //Cerca in base al gender il valore Male/Female e lo trasforma in excel a Male(Gender)/Female(Gender)
  const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs) => {
    if (args.column.headerText === "Gender") {
      if (args.value === "Male") {
        args.value = "Male (Gender)";
      } else {
        args.value = "Female (Gender)";
      }
    }
  };

  //renderizza in una child grid le email
  const renderEmailOrNull = (emailsArray: string[][]) => {
    const result = emailsArray.map((childEmails) => ({
      emails:
        childEmails.length > 0
          ? childEmails.filter((email) => {
              return email;
            })
          : ["--"],
    }));
    childGridOptions.dataSource = result;
  };

  const onLoad = useCallback(() => {
    if (users) {
      const emailsArray = users?.map((user) => user.Emails);
      renderEmailOrNull(emailsArray);
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
      <div
        style={{
          visibility: toggleGrid ? "visible" : "hidden",
          height: toggleGrid ? "auto" : 450,
        }}
      >
        {toggleGrid && users && (
          <>
            <CustomToolbarComponent />
            <GridComponent
              excelQueryCellInfo={excelQueryCellInfo}
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
                {columnsDefinitions.map((value: IColumnsDefinitions) => (
                  <ColumnDirective
                    key={value.id}
                    field={value.fieldName}
                    headerText={value.fieldName}
                    showInColumnChooser={value.options.showInColumnChooser}
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
