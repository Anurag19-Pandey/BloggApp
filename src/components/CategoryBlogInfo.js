import React from 'react'
import '../css/ComponentsStyle/CategoryBlogInfo.css';

const  CategoryBlogInfo = () => {
  return (
    <>
    <div className='category-blog-info-container'>
        <h1 className='category-blog-info-heading'>CATEGORY</h1>
        <ul className='category-blog-info-lists'>
            <li className="category-blog-info-blog-list">
                <div className='category-blog-name'>
                <p>Technical (30)</p>
                </div>
            </li>
            <hr/>
            <li className="category-blog-info-blog-list">
                <div className='category-blog-name'>
                <p>Education (10)</p>
                </div>
            </li>
            <hr/>
            <li className="category-blog-info-blog-list">
                <div className='category-blog-name'>
                <p>Sports (20)</p>
                </div>
            </li>
            <hr/>
            <li className="category-blog-info-blog-list">
                <div className='category-blog-name'>
                <p>Entertainment (15) </p>
                </div>
            </li>
            <hr/>
            <li className="category-blog-info-blog-list">
                <div className='category-blog-name'>
                <p>Health (30)</p>
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default CategoryBlogInfo