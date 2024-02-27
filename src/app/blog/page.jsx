import React from 'react'
import Header from '../component/Header';
import Nav from '../component/Nav';

async function fetchBlogData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function Blog() {

  const blogData = await fetchBlogData();
  console.log(blogData)

  return (
    <div>
      <Header />
      <Nav />
      <div className='container mx-auto'>
        <h3 className='font-bold my-3'>Blog Page</h3>
        <p>This is blog page</p>
        <hr />

        {!blogData ? (
            <div>Loading...</div>
        ) : (
            <>
            {blogData.map((post) => (
                <div key={post.id}>
                    <h3 className='font-bold my-3'>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                ))}
            </>
        )}

        
        
      </div>
    </div>
  )
}

export default Blog



