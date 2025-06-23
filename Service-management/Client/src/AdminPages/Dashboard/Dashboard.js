import React from "react";
import AdminNavbar from "../../component/Navbar/AdminNavbar";
import Sidebar from "../../component/Sidebar/AdminSidebar";
import ServiceStatistics from "../../component/Statistics/ServiceStatistics";
import BasicBars from "../../component/Charts/BasicBars";
import Axis from "../../component/Charts/Axis";
import Pie from "../../component/Charts/Pie";
import Legend from "../../component/Charts/Legend";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content w-100">
        <AdminNavbar />
        <div className="container py-4">
          {/* Responsive chart layout using Bootstrap grid */}
          <div className="row mb-4">
            {/* First Chart Column */}
            <div className="col-12 col-md-6" >
              <BasicBars />
              <Legend />
            </div>

            {/* Second Chart Column */}
            <div className="col-12 col-md-6">
              <Axis />
              <Pie />
            </div>
          </div>

          {/* Service Statistics section */}
          <ServiceStatistics />
        </div>
      </div>
    </div>
  );
}
