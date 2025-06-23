import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


// Lazy loading the components
const Home = lazy(() => import('./ClientPages/Home/Home.js'));
const Join = lazy(() => import('./Authentication/Join/Join.js'));
const Registerprest = lazy(() => import('./Authentication/RegisterPrest/RegisterPrest.js'));
const Registerclient = lazy(() => import('./Authentication/RegisterClient/RegisterClient.js'));
const LoginPrest = lazy(() => import('./Authentication/LoginPrest/LoginPrest.js'));
const LoginClient = lazy(() => import('./Authentication/LoginClient/LoginClient.js'));


const Categories = lazy(() => import('./ClientPages/Categories/Categories.js'));
const ListProfilesInCat =lazy(() => import('./ClientPages/ListProfilesInCat/ListProfilesInCat.js'));
const Aboutus = lazy(() => import('./ClientPages/AboutUs/AboutUs.js'));
const Profile = lazy(() => import('./ClientPages/Profile/Profile.js'));
 const Messanger = lazy(() => import('./ClientPages/Messanger/Messanger.js'));
 const Dashboard = lazy(() => import('./AdminPages/Dashboard/Dashboard.js'));


export default function Router() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <!-- Client Pages --> */}
          <Route path='/' element={<Home />} />
          <Route path='/RegisterClient' element={<Registerclient />} />
          <Route path='/RegisterPrest' element={<Registerprest />} />
          <Route path='/Join' element={<Join />} />
          <Route path='Client/Categories' element={<Categories />} />
          <Route path='Client/ListProfilesInCat' element={<ListProfilesInCat />} />
          <Route path='Client/aboutus' element={<Aboutus />} />
          <Route path='Client/Profile' element={<Profile />} />
          <Route path='Client/Messanger' element={<Messanger />} />
          <Route path='/loginPrest' element={<LoginPrest />} />
          <Route path='/LoginClient' element={<LoginClient />} />



          {/* <!-- Admin Pages --> */}

          <Route path='Admin/Dashboard' element={<Dashboard />} />



        </Routes>
      </Suspense>
    </div>
  );
}
