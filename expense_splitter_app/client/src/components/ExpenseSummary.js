
import {getGrandTotalExpenses, getTotalExpenseByPayee, getAllPayeeNames} from "../service/expense-utils"

import Table from 'react-bootstrap/Table';

const ExpenseSummary = ({expenseItems}) => {

  const payeeNames = getAllPayeeNames(expenseItems)

  const getPendingAmount = (payeeName) => {
  
    // 700
    const totalExpenses = getGrandTotalExpenses(expenseItems);
    //100
    const totalExpensesByPayee = getTotalExpenseByPayee(expenseItems, payeeName);

    //350
    const halfAmount = totalExpenses / 2;

    // 100 >= 350 [FALSE]
    if (totalExpensesByPayee >= halfAmount){
      return 0;
    }else{
      // (700 / 2) -> 350 
      // 350 - 100 -> 250 
      return ( halfAmount - totalExpensesByPayee);
    }
  }


  const displayTable = () => {


    return (

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Payee</th>
            <th>Contributed Amount</th>
            <th>Pending Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            payeeNames.map((payeeName, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{payeeName}</td>
                <td>{getTotalExpenseByPayee(expenseItems, payeeName)}</td>
                <td>{getPendingAmount(payeeName)}</td>
              </tr>
            ))
          }




          <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{getGrandTotalExpenses(expenseItems)}</td>
            <td></td>
          </tr>




        </tbody>
      </Table>
    )


  }


  return (
    <div>
    <h2>Expense Summary</h2>
    {
      displayTable()
    }
    </div>
  )
}

export { ExpenseSummary }