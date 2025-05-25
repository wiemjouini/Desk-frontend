import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    searchTicketList :[],
    selectedTicket :{},
    replyMsg :'',
};

const ticketListsSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading: (state) => {
            state.isLoading = true;
           
        },
        fetchTicketSuccess: (state, action) => {
            state.tickets= action.payload;
             state.searchTicketList= action.payload;
            state.isLoading = false;
            
        },
        fetchTicketFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
        searchTickets:(state,{payload})=>{
            state.searchTicketList=state.tickets.filter((row)=>{
                if(!payload)return row
                return row.subject.toLowerCase().includes(payload.toLowerCase());

            })
        },

        fetchSingleTicketLoading: (state) => {
            state.isLoading = true;
           
        },
        fetchSingleTicketSuccess: (state, {payload}) => {
            state.selectedTicket= payload;
            state.isLoading = false;
            
        },
        fetchSingleTicketFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
         replyTicketLoading: (state) => {
            state.isLoading = true;
           
        },
        replyTicketSuccess: (state, {payload}) => {
            state.selectedTicket= payload;
            state.isLoading = false;
            state.replyMsg = payload
            
        },
        replyTicketFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
         closeTicketLoading: (state) => {
            state.isLoading = true;
           
        },
        closeTicketSuccess: (state, {payload}) => {
            state.selectedTicket= payload;
            state.isLoading = false;
            state.replyMsg = payload
            
        },
        closeTicketFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },

    },
});

const {reducer , actions}=ticketListsSlice;
export const {fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
    searchTickets,
    replyMsg}
    =actions
export default reducer ; 

