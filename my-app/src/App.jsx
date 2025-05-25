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
import { PrivateRoute } from './components/private-route/privateRouter.comp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-ticket"
          element={
            <PrivateRoute>
              <AddTicket />
            </PrivateRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketLists />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticket/:tId"
          element={
            <PrivateRoute>
              <Ticket />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;





       
   










