import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import { Entry } from './page/entry/Entry.page';
import { Dashboard } from './page/dashboard/dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLists } from './page/ticket-listing/TicketLists.page';
import { Ticket } from './page/ticket/ticket.page';
import { Header } from './layout/partials/Header.comp';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-ticket" element={<AddTicket />} />
        <Route path="/tickets" element={<TicketLists />} />
        <Route path="/ticket/:tId" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;

       
   










