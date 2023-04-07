import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './component/Header';
import Home from './pages/Home';
import Footer from './component/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Err404 from './pages/Err404';
import Blog from './pages/Blog';
import WriteBlog from './pages/Write';
import BlogState from './context/blogState';

function App() {
  return (
    <>
      <BlogState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/write-blog' element={<WriteBlog />} />

            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/blog/:slag' element={<Blog />} />

            <Route path='*' element={<Err404 />} />





          </Routes>
          <Footer />

        </BrowserRouter>
      </BlogState>
    </>
  );
}

export default App;
