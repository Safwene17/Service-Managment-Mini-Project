import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers } from '@coreui/icons';

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar border-end">

        <ul className="sidebar-nav">
          <li className="nav-title">Nav Title</li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <CIcon icon={cilSpeedometer} className="nav-icon" /> Nav item
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <CIcon icon={cilSpeedometer} className="nav-icon" /> With badge
              <span className="badge bg-primary ms-auto">NEW</span>
            </a>
          </li>
          <li className="nav-item nav-group show">
            <a className="nav-link nav-group-toggle" href="#">
              <CIcon icon={cilPuzzle} className="nav-icon" /> Nav dropdown
            </a>
            <ul className="nav-group-items">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span> Nav dropdown item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="nav-icon">
                    <span className="nav-icon-bullet"></span>
                  </span> Nav dropdown item
                </a>
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  );
}
