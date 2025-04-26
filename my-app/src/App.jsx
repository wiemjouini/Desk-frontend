import './App.css'
import { DefaultLayout } from './layout/DefaultLayout'
import { Entry } from './page/entry/Entry.page'
import { Dashboard } from './page/dashboard/dashboard.page'



function App() {
  return (
    <div>
     {/*<Entry/>*/} 
     <DefaultLayout>
      <Dashboard/>
     </DefaultLayout>
    </div>
  )
}

export default App

