import { RowID, RowElement } from './interface';
const CRUD = require('./crud');

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert a new row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age field set to 23
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Update the row with the newRowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using newRowID
CRUD.deleteRow(newRowID);
