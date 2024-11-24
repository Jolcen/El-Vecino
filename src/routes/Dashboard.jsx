import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Dashboard.css';

import DashUser from '../components/DashUser';
import DashSection from '../components/DashSection';
import DashItem from '../components/DashItem';
import DashUserRegister from './dash/DashUserRegister';
import DashUserList from './dash/DashUserList';

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
              <NavLink to="" className="nav-link">
                <DashItem icon="Circle" item_name="Registro cliente" />
              </NavLink>
              <NavLink to="" className="nav-link">
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
              <DashItem icon="Circle" item_name="Registro proveedor" />
              <DashItem icon="Circle" item_name="Lista de proveedores" />
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
              <DashItem icon="Circle" item_name="Registro productos" />
              <DashItem icon="Circle" item_name="Lista de productos" />
            </div>
          )}
        </div>
        {/*                          Menú Factura                          */}
        <div>
          <DashSection
            icon="receipt_long"
            section_name="Factura"
            funtion={() => toggleSection('factura')}
            iconState={"chevron_left"}
          />
          {openSections['factura'] && (
            <div className="dash-items">
              <DashItem icon="Circle" item_name="Historial factura" />
            </div>
          )}
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="user-register" element={<DashUserRegister />} />
          <Route path="user-list" element={<DashUserList />} />
          <Route path="*" element={<h2 className="dashtitle">Selecciona una opción del menú</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
