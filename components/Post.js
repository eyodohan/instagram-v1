import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';

const Post = ({ id, img, userImg, caption, username }) => {
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* post headeer */}

      <div className='flex items-center p-5'>
        <img
          src={userImg}
          alt={username}
          className='h-12 w-12 rounded-full object-cover border p-1 mr-3'
        />
        <p className='font-bold flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>
      {/* post image */}
      <img src={img} className='object-cover w-full' alt='' />

      {/* postButtons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
        </div>
        <BookmarkIcon className='btn ' />
      </div>

      {/* post comments */}

      <p className='p-5 truncate'>
        <span className='font-bold mr-2'>{username}</span> {caption}
      </p>

      {/* post input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          className='border-none flex-1 focus:ring-0'
          type='text'
          placeholder='Enter your comment...'
        />
        <button className='text-blue-400 font-bold'>Post</button>
      </form>
    </div>
  );
};

export default Post;
