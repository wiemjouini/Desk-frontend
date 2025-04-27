import './App.css'
import { DefaultLayout } from './layout/DefaultLayout'
import { Entry } from './page/entry/Entry.page'
import { Dashboard } from './page/dashboard/dashboard.page'
import { AddTicket } from './page/new-ticket/AddTicket.page'



function App() {
  return (
    <div>
     {/*<Entry/>*/} 
     <DefaultLayout>
     {/*<Dashboard/>*/} 
      <AddTicket/>
     </DefaultLayout>
    </div>
  )
}

export default App

