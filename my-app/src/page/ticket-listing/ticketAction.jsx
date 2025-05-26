
import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail,
  searchTickets ,fetchSingleTicketLoading,fetchSingleTicketSuccess,
  fetchSingleTicketFail,
   replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail, 
    closeTicketLoading,
    closeTicketSuccess} from './ticketSlice';
import {getAllTickets,getSingleTickets,updateReplyTicket,updateTicketStatusClose} from '../../api/ticketApi'

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());

    try {
        const result = await getAllTickets()
    dispatch(fetchTicketSuccess(result.data.result));
    console.log("Fetched Tickets: ", result.data.result); 

  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = str => dispatch =>{
    dispatch(searchTickets(str))
}



//Action for single ticket only 
export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());

    try {
        const result = await getSingleTickets(_id);
     dispatch(fetchSingleTicketSuccess( result.data.result.length && result.data.result[0])); 

  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
 }


}


//actions for replying on single ticket 
export const replyOnTicket = (_id,msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());

    try {
        const result = await updateReplyTicket(_id,msgObj);
        console.log(result)
        if(result.status === "error"){
          return dispatch(replyTicketFail(result.message))
        }


    dispatch(fetchSingleTicket(_id))

    dispatch(replyTicketSuccess(result.message)); 

  } catch (error) {
    console.log(error.message)
    dispatch(replyTicketFail(error.message));
 }


}


export const closeTicket = (_id) => async (dispatch) => {
 dispatch(closeTicketLoading());

    try {
       const result = await updateTicketStatusClose(_id);
        console.log(result)
        if(result.status === "error"){
          return dispatch(replyTicketFail(result.message))
        }


    dispatch(fetchSingleTicket(_id))

    dispatch(closeTicketSuccess(result.message)); 

  } catch (error) {
    console.log(error.message)
    dispatch(replyTicketFail(error.message));
 }
}



