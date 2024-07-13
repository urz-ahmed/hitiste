import React from 'react'
import PostForm from './post-form'
const CreatePost = () => {
  return (
    <div className='flex flex-col mb-8'>
      <div className=''>
        <div className='flex-start gap-3 justify-start w-full'>
          <img 
            src='/assets/icons/add-post.svg'
            width={24}
            height={24}
            alt="Add Post"
          />
          <h2 className='h3-bold md:h3-bold text-left w-full'>Create Post</h2>
        </div>
        
        <PostForm action='Create'/>
      </div>
    </div>
  )
}

export default CreatePost