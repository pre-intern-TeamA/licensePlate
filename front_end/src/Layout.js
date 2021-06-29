// router
import { BrowserRouter as Router} from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <Router>
      <main>{children}</main>
    </Router>
  )
}

export default Layout
