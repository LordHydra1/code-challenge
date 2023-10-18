import {
  FilterSettingsModel,
  GridModel,
  PageSettingsModel,
} from "@syncfusion/ej2-react-grids";
import { Gender } from "../enums/gender";
import { IUser } from "../models/IUser";

// Definizione delle opzioni della toolbar
const toolbarOptions: object[] = [
  {
    text: "Nascondi Dispari",
    tooltipText: "Nascondi Dispari",
    id: "hideUsersOdds",
  },
  { text: "Mostra Colonne", id: "Column" },
  { text: "Male", tooltipText: "Male", id: "Male" },
  { text: "Female", tooltipText: "Female", id: "Female" },
  { text: "ExcelExport" },
];

const customToolbarOptions = [{ id: 1, text: 'Refresh Table Data'}, { id: 2, text:  'Remove Users Odds'}, ];

const genderOptionsDropDown = [
  { text: "Male", value: Gender.MALE, iconCss: "male-icon" },
  { text: "Female", value: Gender.FEMALE, iconCss: "female-icon" },
];

// Definizione delle opzioni di paginazione
const pageOptions: PageSettingsModel = {
  pageSize: 5,
  pageSizes: true,
};

let childGridOptions: GridModel = {
  columns: [{ field: "emails", headerText: "Emails", width: 200 }],
  queryString: "Emails",
};

const fieldsForFilter: object = {
  groupBy: "Gender",
  text: "text",
  value: "value",
  iconCss: "iconCss",
};
const filterOptions: FilterSettingsModel = {
  type: "Excel",
};

// Opzioni di editing
const editOptions = { allowEditing: true };

const columnsDefinitions = [
  {
    id: 1,
    fieldName: "FirstName" as IUser["FirstName"],
    options: { showInColumnChooser: false, allowFiltering: false, allowEditing: true},
  },
  {
    id: 2,
    fieldName: "LastName" as IUser["LastName"],
    options: { showInColumnChooser: true, allowFiltering: true, allowEditing: true  },
  },
  {
    id: 3,
    fieldName: "Age",
    options: { showInColumnChooser: true, allowFiltering: false, allowEditing: false },
  },
];

export {
  childGridOptions,
  editOptions,
  fieldsForFilter,
  filterOptions,
  genderOptionsDropDown,
  pageOptions,
  toolbarOptions,
  columnsDefinitions,
  customToolbarOptions
};
