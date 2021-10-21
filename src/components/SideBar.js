import React from 'react';
import image from '../assets/images/logo_mobile.png';

import {Link} from "react-router-dom";

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav sidebar sidebar-dark accordion" style={{backgroundColor: "darkgoldenrod"}} id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>



                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <br/>
                            {/*<!-- Divider -->*/}
                        <hr className="sidebar-divider my-0"/>
                        <span>Dashboard</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Secciones</div>

                 {/*<!-- Nav Item - Pages -->*/}
                 <li className="nav-item">
                    <Link className="nav-link collapsed" to="/categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastProduct">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último agregado</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/totales">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Totales</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de productos</span>
                    </Link>
                </li>

            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;