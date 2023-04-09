import {BrowserRouter , Routes , Route } from "react-router-dom" ;
import HomePage from "./pages/HomePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import WritingPage from "./pages/WritingPage";
import UserProfile from "./pages/UserProfile";
import SingleBlog from "./components/SingleBlog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

 function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/articles" element={<ArticlesListPage/>}></Route>
        <Route path="/articles/:articleId" element={<ArticlePage/>}></Route>
        <Route path="/write" element={<WritingPage/>}></Route>
        <Route path="*" element={NotFoundPage}/>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/blog" element={<SingleBlog/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
