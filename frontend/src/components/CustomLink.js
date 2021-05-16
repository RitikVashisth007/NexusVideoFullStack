import { Route, Link, withRouter } from 'react-router-dom'

const CustomLink = ({ to, location }) => (
  <Route path={to} children={({ match }) => (
      <Link replace={to === location.pathname} to={to}></Link>
  )}/>
)


export default withRouter(CustomLink);