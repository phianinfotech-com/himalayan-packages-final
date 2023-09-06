import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PreloaderWrapper from './components/PreloaderWrapper';
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import AddBlog from "./components/pages/AddBlog";
import BlogDetails from "./components/pages/BlogDetails";
import NotFound from "./components/pages/NotFound";
import Upload from "./components/pages/Upload";
import AddExplore from "./components/admin/AddExplore";
import AddBestOf from "./components/admin/AddBestOf";
import Addpackages from "./components/admin/Addpackages";
import AddBestOfPlace from "./components/admin/AddBestOfPlace";
import Page from "./components/pages/page";
import Addpage from "./components/admin/Addpage";
import FetchEnquire from "./components/admin/FetchEnquire";
import AddPackageForm from "./components/admin/Addpackageform";
import PackageDetails from "./components/pages/PackageDetails";
import PageDetails from "./components/pages/PageDetails";
import ContactUs from "./components/pages/ContactUs";
import AllPackages from "./components/pages/AllPackages";
import SinglePackage from "./components/pages/SinglePackage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (replace with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PreloaderWrapper />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/AddBlog" element={<AddBlog />} />
            <Route path="/blog/:id/" element={<BlogDetails />} />

            <Route path="/explore" element={<AddExplore />} />
            <Route path="/bestof" element={<AddBestOf />} />
            <Route path="/addpackages" element={<Addpackages />} />
            <Route path="/bestplace" element={<AddBestOfPlace />} />
            <Route path="/page/:id" element={<Page />} />
            <Route path="/page/" element={<Page />} />
            <Route path="/addpage/" element={<Addpage />} />
            <Route path="/viewEnquire/" element={<FetchEnquire />} />
            <Route path="/addpackageform" element={<AddPackageForm />} />
            <Route path="/PackageDetails" element={<PackageDetails />} />
            <Route path="/About-us" element={<PageDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/tours/:id" element={<SinglePackage />} />
            <Route path="/collections/:id" element={<AllPackages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
