
import Home from "./components/pages/Home";


import Blog from "./components/pages/Blog";
import AddBlog from "./components/pages/AddBlog";
import BlogDetails from "./components/pages/BlogDetails";

import { BrowserRouter , Routes, Route } from 'react-router-dom';

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
  return (
    <div>

<BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/AddBlog" element={<AddBlog/>}/>
      <Route path="/blog/:id/" element={<BlogDetails/>}/>

      <Route path="/explore" element={<AddExplore/>}/>
      <Route path="/bestof" element={<AddBestOf/>}/>
      <Route path="/addpackages" element={<Addpackages />}/>
      <Route path="/bestplace" element={<AddBestOfPlace />}/>
      <Route path="/page/:id" element={<Page />}/>
      <Route path="/page/" element={<Page />}/>
      <Route path="/addpage/" element={<Addpage />}/>
      <Route path="/viewEnquire/" element={<FetchEnquire />}/>
      <Route path="/addpackageform" element={<AddPackageForm />}/>
      <Route path="/PackageDetails" element={<PackageDetails />}/>
      <Route path="/About-us" element={<PageDetails />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/tours/:id" element={<SinglePackage />}/>
      <Route path="/collections/:id" element={<AllPackages/>}/>

  
    </Routes>
  </BrowserRouter>
   
  

      {/* <section className="bg-[url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] w-full h-screen bg-cover bg-center bg-no-repeat mb-8 md:h-screen ">
        <div className="w-full h-full  backdrop-brightness-75">

          <Navbar />

          <Headerfile />

        </div>       
      </section> */}
      {/* <Home />
      <SliderComponent />

     */}
     {/* <Blog />  */}
     {/* <AddBlog /> */}

    </div>
    
  );
}

export default App;
