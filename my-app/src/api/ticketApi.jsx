import axios from 'axios';

export const getAllTickets = () => {
  return new Promise((resolve, reject) => {
    try {
      const result =  axios.get('http://localhost:3000/v1/ticket', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpZW03NTdAZ21haWwuY29tIiwiaWF0IjoxNzQ3NjE0NTU1LCJleHAiOjE3NDc2MTU0NTV9.sf4dtJAysokxBXHm6roa-BQ1Sh4QkIocuQhjwrFOeCQ',
        },
      });
      resolve(result); // tu peux aussi faire resolve(result.data)
    } catch (error) {
      reject(error);
    }
  });
};

