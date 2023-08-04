import Headerfile from "./components/Headerfile";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import SliderComponent from "./components/SliderComponent";
import Footer from "./components/Footer";

import Blog from "./components/pages/Blog";
import AddBlog from "./components/pages/AddBlog";
import BlogDetails from "./components/pages/BlogDetails";

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import NotFound from "./components/pages/NotFound";
import Upload from "./components/pages/Upload";
import AddExplore from "./components/admin/AddExplore";
import AddBestOf from "./components/admin/AddBestOf";
import AddPackageForm from "./components/admin/AddPackageForm";
import AddBestOfPlace from "./components/admin/AddBestOfPlace";
import SinglePackage from "./components/pages/SinglePackage";
import AllPackage from "./components/pages/AllPackage";

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
      <Route path="/addpackages" element={<AddPackageForm />}/>
      <Route path="/bestplace" element={<AddBestOfPlace />}/>
      <Route path="/tours/:id" element={<SinglePackage />}/>
      <Route path="/collections/:id" element={<AllPackage/>}/>
         
    </Routes>
  </BrowserRouter>
   
  


    </div>
    
  );
}

export default App;
