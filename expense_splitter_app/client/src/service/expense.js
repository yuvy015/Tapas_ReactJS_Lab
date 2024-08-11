import axios from "axios";

const getAllExpenseItems = async () => {
  
    const getItemsUrl = "http://localhost:4000/expenses";
    
    console.log("Final Url is " + getItemsUrl);
    
    // GET Request
    const response  = await axios.get(getItemsUrl);
    return response.data;
  
} 

const postExpenseItem = async (newExpenseItem) => {

    // newExpenseItem
    // {
        // "expenseDescription": "?",
        // "payeeName": "?",
        // "price": ?,
        // "date": "?"
      // }

    const postItemUrl = "http://localhost:4000/expenses";
  
    const response = await axios.post(postItemUrl, newExpenseItem, {
      headers : {
        'Content-Type' : 'application/json'
      }
    })
  
    // response
    // {
        // "expenseDescription": "?",
        // "payeeName": "?",
        // "price": ?,
        // "date": "?",
        // "id" : "123-ABC"
      // }
      return response.data;
}

// POST Request Type

export {getAllExpenseItems, postExpenseItem};
