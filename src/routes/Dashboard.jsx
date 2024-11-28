import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Dashboard.css';

import DashUser from '../components/DashUser';

import DashSection from '../components/DashSection';
import DashItem from '../components/DashItem';

import DashUserRegister from './dash/DashUserRegister';
import DashUserList from './dash/DashUserList';
import DashClientRegister from './dash/DashClientRegister';
import DashClientList from './dash/DashClientList';
import DashSupplierRegister from './dash/DashSupplierRegister';
import DashSupplierList from './dash/DashSupplierList';
import DashProductSell from './dash/DashProductSell';
import DashProductList from './dash/DashProductList';
import DashProductRegister from './dash/DashProductRegister';

const Dashboard = () => {
  // Estado para manejar los menús desplegables
  const [openSections, setOpenSections] = useState({});

  // Función para alternar el estado de un menú
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Alterna entre abierto y cerrado
    }));
  };

  return (
    <div className="dashboard">
      <div className="sections">
        <DashUser />

        {/*                          Menú Inicio                          */}
        <NavLink to="" className="nav-link">
          <DashSection icon="House" section_name="Inicio" />
        </NavLink>

        {/*                          Menú Usuarios                          */}
        <div>
          <DashSection
            icon="Groups"
            section_name="Usuarios"
            funtion={() => toggleSection('usuarios')}
            iconState={"keyboard_arrow_down"}
            //iconState={"chevron_left"}
          />
          {openSections['usuarios'] && (
            <div className="dash-items">
              <NavLink to="user-register" className="nav-link">
                <DashItem icon="Circle" item_name="Registro de usuario"/>
              </NavLink>
              <NavLink to="user-list" className="nav-link">
                <DashItem icon="Circle" item_name="Gestion de usuarios" />
              </NavLink>
            </div>
          )}
        </div>
        {/*                          Menú Clientes                          */}
        <div>
          <DashSection
            icon="Person"
            section_name="Clientes"
            funtion={() => toggleSection('clientes')}
            iconState={"chevron_left"}
          />
          {openSections['clientes'] && (
            <div className="dash-items">
              <NavLink to="client-register" className="nav-link">
                <DashItem icon="Circle" item_name="Registro cliente" />
              </NavLink>
              <NavLink to="client-list" className="nav-link">
                <DashItem icon="Circle" item_name="Lista de clientes" />
              </NavLink>
            </div>
          )}
        </div>
        {/*                          Menús Proveedores                         */}
        <div>
          <DashSection
            icon="Local_shipping"
            section_name="Proveedores"
            funtion={() => toggleSection('proveedores')}
            iconState={"chevron_left"}
          />
          {openSections['proveedores'] && (
            <div className="dash-items">
              <NavLink to="supplier-register" className="nav-link">
                <DashItem icon="Circle" item_name="Registro proveedor" />
              </NavLink>
              <NavLink to="supplier-list" className="nav-link">
                <DashItem icon="Circle" item_name="Lista de proveedores" />
              </NavLink>
            </div>
          )}
        </div>
        {/*                      Menú Productos                           */}
        <div>
          <DashSection
            icon="shopping_basket"
            section_name="Productos"
            funtion={() => toggleSection('productos')}
            iconState={"chevron_left"}
          />
          {openSections['productos'] && (
            <div className="dash-items">
              <NavLink to="product-register" className="nav-link">
                <DashItem icon="Circle" item_name="Registro productos" />
              </NavLink>
              <NavLink to="product-list" className="nav-link">
                <DashItem icon="Circle" item_name="Lista de productos" />
              </NavLink>
              <NavLink to="product-sell" className="nav-link">
                <DashItem icon="Circle" item_name="Venta de productos" />
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {/*                        contenido                */}
      <div className="content">
        <Routes>
          <Route path="user-register" element={<DashUserRegister />} />
          <Route path="user-list" element={<DashUserList />} />

          <Route path="client-register" element={<DashClientRegister />} />
          <Route path="client-list" element={<DashClientList/>} />

          <Route path="supplier-register" element={<DashSupplierRegister />} />
          <Route path="supplier-list" element={<DashSupplierList />} />

          <Route path="product-register" element={<DashProductRegister />} />
          <Route path="product-list" element={<DashProductList />} />
          <Route path="product-sell" element={<DashProductSell />} />

          <Route path="*" element={<h2 className="dashtitle">Selecciona una opción del menú</h2>} />
        </Routes>
      </div>
      
    </div>
  );
};

export default Dashboard;
