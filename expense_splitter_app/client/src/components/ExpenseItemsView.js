

// Reference Code

// Sample Expenses
  // Place them in array
  // 3 expense-items
// Change the Table Headers
  // Serial No
  // Expense Description
  // Payee Name
  // Date
  // Price
// Table Body
  // The Content has to be dynamic
  // array.map( ) to render the expense-item
  // Input 
    // -> ExpenseItem [Sample]
  // Output
    // 
      //   <tr>
      //   <td>2</td>
      //   <td>Jacob</td>
      //   <td>Thornton</td>
      //   <td>@fat</td>
      // </tr>    

import Table from 'react-bootstrap/Table';

const ExpenseItemsView = ({expenseItems}) => {

  const sampleExpenseItems = [
    {
      "expenseDescription": "Internet Expenses",
      "payeeName": "Ramesh",
      "price": 1100,
      "date": "2023-02-26T00:00:00.000Z",
      "id": 1
    },
    {
      "expenseDescription": "Bike Maintainence Expenses",
      "payeeName": "Rahul",
      "price": 3500,
      "date": "2023-02-26T00:00:00.000Z",
      "id": 2
    },
    {
      "expenseDescription": "Electricity Bill - Nov Month",
      "payeeName": "Ramesh",
      "price": 2200,
      "date": "2023-02-26T00:00:00.000Z",
      "id": 3
    }
  ]

  function expenseItemsTable() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Description</th>
            <th>Payee Name</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            expenseItems.map( (expenseItem, index) => {
                
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{expenseItem.expenseDescription}</td>
                  <td>{expenseItem.payeeName}</td>
                  <td>{expenseItem.date}</td>
                  <td>{expenseItem.price}</td>
                </tr>
    
              )

            }) 
          }
        </tbody>
      </Table>
    );
  }
  
  return (
    <div>

      {expenseItemsTable()}

    </div>
  )

}

export {ExpenseItemsView}