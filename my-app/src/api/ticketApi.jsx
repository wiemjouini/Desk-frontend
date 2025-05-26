import axios from 'axios';


const rootUrl = "http://localhost:3000/v1/";
const TicketUrl = rootUrl + "ticket/";
const closeTicketUrl = rootUrl +"ticket/close-ticket/";
//http://localhost:3000/v1/ticket


export const getAllTickets = () => {
  return new Promise((resolve, reject) => {
    try {
      const result =  axios.get('http://localhost:3000/v1/ticket', {
        headers: {
          Authorization:sessionStorage.getItem('accessJWT')
        },
      });
      resolve(result); // tu peux aussi faire resolve(result.data)
    } catch (error) {
      reject(error);
    }
  });
};




export const getSingleTickets = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      const result =  axios.get(TicketUrl + _id, {
        headers: {
          Authorization:sessionStorage.getItem('accessJWT')
        },
      });
      resolve(result); // tu peux aussi faire resolve(result.data)
    } catch (error) {
      console.log(error.message)
      reject(error);
    }
  });
};



export const updateReplyTicket = (_id,msgObj) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result =  await axios.put(TicketUrl  + _id,msgObj, {
        headers: {
          Authorization:sessionStorage.getItem('accessJWT')
        },
        msgObj,
      });
      resolve(result.data); // tu peux aussi faire resolve(result.data)
    } catch (error) {
      console.log(error.message)
      reject(error);
    }
  });
};


export const updateTicketStatusClose = (_id) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result =  await axios.patch(closeTicketUrl + _id,{}, {
        headers: {
          Authorization:sessionStorage.getItem('accessJWT')
        },
        
      });
      resolve(result.data); // tu peux aussi faire resolve(result.data)
    } catch (error) {
      console.log(error.message)
      reject(error);
    }
  });
};


export const createNewTicket = (frmData) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result =  await axios.post(TicketUrl,
        frmData, {
        headers: {
          Authorization:sessionStorage.getItem('accessJWT')
        },
        
      });
      resolve(result.data); // tu peux aussi faire resolve(result.data)
    } catch (error) {
      console.log(error.message)
      reject(error);
    }
  });
};

