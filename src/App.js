import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'

const App = () => (
  <div className="main-container">
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
