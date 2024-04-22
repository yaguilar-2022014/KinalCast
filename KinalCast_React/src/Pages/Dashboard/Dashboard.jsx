import './dashboard.css'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { DashboardContent } from '../../Pages/Dashboard/Dashboard'

export const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <DashboardContent/>
    </div>
  )
}
