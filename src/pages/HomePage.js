import BlogsGallery from "../components/BlogsGallery";
import CategoryBlogInfo from "../components/CategoryBlogInfo";
import Footer from "../components/Footer";
import HomePageBanner from "../components/HomePageBanner";
import MostPopularBlogs from "../components/MostPopularBlogs";
import SideInfo from "../components/SideInfo";
import SimpleSlider from "../components/SimpleSlider";
import '../css/PagesStyle/HomePage.css' ;

const HomePage = () => {
    
    return (
        <>
            <HomePageBanner/>
            <MostPopularBlogs/>
            <div className='gallery-section'>
                <div className="left-gallery-section">
                <BlogsGallery/>
                </div>
                <div className="right-gallery-section">
                    <SideInfo/>
                <CategoryBlogInfo/>
                </div>
            </div>
          <SimpleSlider/>
          <Footer/>
        </>

    );
}

export default HomePage ;