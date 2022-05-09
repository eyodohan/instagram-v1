import { DotsHorizontalIcon } from '@heroicons/react/outline';

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
    </div>
  );
};

export default Post;