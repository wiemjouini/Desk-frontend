import './App.css'
import { DefaultLayout } from './layout/DefaultLayout'
import { Entry } from './page/entry/Entry.page'
import { Dashboard } from './page/dashboard/dashboard.page'
import { AddTicket } from './page/new-ticket/AddTicket.page'
import { TicketLists } from './page/ticket-listing/TicketLists.page'



function App() {
  return (
    <div>
     {/*<Entry/>*/} 
     <DefaultLayout>
     {/*<Dashboard/>*/} 
      {/*<AddTicket/>*/}
      <TicketLists/>
     </DefaultLayout>
    </div>
  )
}

export default App

