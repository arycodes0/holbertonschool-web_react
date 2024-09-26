// Define the Student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create Student Objects
  const student1: Student = {
    firstName: "You",
    lastName: "Are",
    age: 25,
    location: "Polo Sur",
  };
  
  const student2: Student = {
    firstName: "My",
    lastName: "Type",
    age: 30,
    location: "Polo Norte",
  };
  
  // Store Students in an Array
  const studentsList: Student[] = [student1, student2];
  
  // Render a Table Using Vanilla JavaScript
  
  // Create the table element
  const table: HTMLTableElement = document.createElement('table');
  
  // Create header row
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  const headers: string[] = ['First Name', 'Location'];
  
  headers.forEach((headerText: string): void => {
    const header: HTMLTableCellElement = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  
  table.appendChild(headerRow);
  
  // Create rows for each student
  studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');
  
    // Create cell for first name
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
  
    // Create cell for location
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
  
    // Append row to table
    table.appendChild(row);
  });
  
  // Append the Table to the Container Div or Body
  const tableContainer: HTMLElement | null = document.getElementById('table-container');
  
  if (tableContainer) {
    // Append to the existing container
    tableContainer.appendChild(table);
  } else {
    // If container doesn't exist, append to body
    document.body.appendChild(table);
  }
  