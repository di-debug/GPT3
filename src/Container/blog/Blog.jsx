import React from 'react'
import { Article } from '../../Component/Index';
import {blog01, blog02, blog03, blog04, blog05} from './import'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
      </div>

      <div className="gpt3__blog-container">
      <div className="gpt3__blog-container-groupA">
        <Article imgUrl={blog01} date="July 04, 2023" title=""/>
      </div>
      <div className="gpt3__blog-container-groupB">
      <Article imgUrl={blog02} date="July 04, 2023" title=""/>
      <Article imgUrl={blog03} date="July 04, 2023" title=""/>
      <Article imgUrl={blog04} date="July 04, 2023" title=""/>
      <Article imgUrl={blog05} date="July 04, 2023" title=""/>
      </div>
      </div>
    </div>
  )
}

export default Blog;