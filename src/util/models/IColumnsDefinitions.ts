interface IColumnsDefinitions {
  id: number;
  fieldName: string;
  options: {
    showInColumnChooser: boolean;
    allowFiltering: boolean;
    allowEditing: boolean;
  };
}

export type { IColumnsDefinitions };
