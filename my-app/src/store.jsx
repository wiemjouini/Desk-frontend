import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './page/ticket-listing/ticketSlice';
import loginReducer from './components/login/loginSlice';
import userReducer from './page/dashboard/userSlice'



const Store = configureStore({
    reducer:{
        tickets: ticketsReducer,
        login: loginReducer,
        user:userReducer,
    },
});

export default Store;