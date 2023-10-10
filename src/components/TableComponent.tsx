import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  DetailRow,
  Edit,
  ExcelExport,
  GridComponent,
  GridModel,
  Inject,
  Page,
  PageSettingsModel,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaFemale, FaMale } from "react-icons/fa";
import {
  fetchusersRequest,
  removeOdds,
} from "../redux/actions/userActions/userActions";
import { RootState } from "../redux/reducers/rootReducer";
import { ISingleUser, IUser } from "../util/model/IUser";
import CustomToolbarComponent from "./CustomToolbarComponent";
import '../assets/table.style.css';

// Definizione delle props del componente
interface TableComponentProps {}

const TableComponent: React.FC<TableComponentProps> = (props) => {
  const dispatch = useDispatch();
  const [toggleGrid, SetToggleGrid] = useState(true);
  const [data, SetData] = useState<Array<ISingleUser>>();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  // Definizione delle opzioni della toolbar
  const toolbarOptions: object[] = [
    { text: "Nascondi Dispari", tooltipText: "Nascondi Dispari", id: "Click" },
    { text: "Mostra Colonne", id: "Column" },
    { text: "Male", tooltipText: "Male", id: "Male" },
    { text: "Female", tooltipText: "Female", id: "Female" },
    { text: "ExcelExport" },
  ];

  // Definizione delle opzioni di paginazione
  const pageOptions: PageSettingsModel = {
    pageSize: 5,
    pageSizes: true,
  };

  // Opzioni di editing
  const editOptions = { allowEditing: true };

  // Mappa i dati degli utenti per il componente Grid
  const gridData = users.map((user: IUser) => user.attributes);

  // Effetto per caricare i dati iniziali
  useEffect(() => {
    dispatch(fetchusersRequest({ debounce: false }));
  }, [dispatch]);

  // Effetto per aggiornare i dati quando 'users' cambia
  useEffect(() => {
    if (users.length > 0) {
      const gridData = users.map((user: IUser) => user.attributes);
      SetData(gridData);
    }
  }, [users]);

  // Funzione per gestire il click sulla toolbar
  const watchFetchData = () => {
    dispatch(fetchusersRequest({ debounce: true }));
    SetData(gridData);
  };

  let grid: GridComponent | null;

  // Gestisce il click sulla toolbar
  const clickHandler = (args: any) => {
    if (grid && args.item.id === "grid_excelexport") {
      grid.excelExport();
    }
    if (grid && args.item.id === "Click") {
      const newUsersOdds = users.filter((user: IUser) => user.id % 2 === 0);
      dispatch(removeOdds({ users: newUsersOdds }));
    }
    if (grid && args.item.id === "Column") {
      grid.columnChooserModule.openColumnChooser(200, 50);
    }
    if (args.item.id === "Female" || args.item.id === "Male") {
      let gender = args.item.id;
      filterUserByGender(gender);
    }
  };

  const filterUserByGender = (genderValue: string) => {
    const filteredList = gridData.filter(
      (user) => user.gender === genderValue.toLocaleLowerCase()
    );
    SetData(filteredList);
  };

  return (
    <>
      {toggleGrid && (
        <>
          <GridComponent
            dataSource={data}
            id="grid"
            allowExcelExport={true}
            toolbar={toolbarOptions}
            toolbarClick={clickHandler}
            ref={(g) => (grid = g)}
            allowPaging={true}
            showColumnChooser={true}
            pageSettings={pageOptions}
            editSettings={editOptions}
          >
            {/* Definizione delle colonne */}
            <ColumnsDirective>
              <ColumnDirective
                field="firstName"
                headerText="First Name"
                showInColumnChooser={false}
                template={(props: ISingleUser) =>
                  props.firstName === null ? (
                    <div>--</div>
                  ) : (
                    <div>{props.firstName}</div>
                  )
                }
              />
              <ColumnDirective
                field="lastName"
                headerText="Last Name"
                template={(props: ISingleUser) =>
                  props.lastName === null ? (
                    <div>--</div>
                  ) : (
                    <div>{props.lastName}</div>
                  )
                }
              />
              <ColumnDirective field="age" headerText="Age" />
              <ColumnDirective
                field="email"
                headerText="Email"
                template={(props: ISingleUser) =>
                  props.email === null ? (
                    <div>--</div>
                  ) : (
                    <div>{props.email}</div>
                  )
                }
              />
              <ColumnDirective
                field="gender"
                headerText="Gender"
                template={(props: ISingleUser) =>
                  props.gender === "male" ? (
                    <FaMale color="#0000FF" />
                  ) : (
                    <FaFemale color="#FFC0CB" />
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
              ]}
            />
          </GridComponent>
          <CustomToolbarComponent setGridData={SetData} users={gridData} />
        </>
      )}
      {/* Pulsante per nascondere/mostrare la Grid */}
      <button onClick={() => SetToggleGrid(!toggleGrid)}>
        {toggleGrid ? "Nascondi la Grid" : "Mostra la Grid"}
      </button>
      {toggleGrid && (
        /* Pulsante per aggiornare i dati con debounce */
        <button onClick={() => watchFetchData()}>Refresh with debounce</button>
      )}
    </>
  );
};

export default TableComponent;
