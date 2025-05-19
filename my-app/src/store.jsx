import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './page/ticket-listing/ticketSlice';



const Store = configureStore({
    reducer:{
        tickets:ticketsReducer,
    },
});

export default Store;