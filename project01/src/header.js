import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './index.css'

const Header = () => {
  return (
   <>
  
   			<div id="site-content">
				{/* <div class="site-header">
					<div class="container">
					
						<div class="main-navigation">
						
							<ul class="menu">
              <li class="menu-item "> <span>  |</span>  Welcome Admin</li>
				<li class="menu-item ">  <Link to="/"> Home</Link></li>
        <li class="menu-item ">  <Link to="/PlaneSphere"> Plane Sphere</Link></li>
							</ul>

						
						</div>
					</div>
				</div> */}
        
<ul>
  <li><a class="active" >Three.js</a></li>
  <li><a>PlaneSphere</a></li>
  <li><a>Globe</a></li>

</ul>
			</div>
   
      </>
  )
}

export default Header