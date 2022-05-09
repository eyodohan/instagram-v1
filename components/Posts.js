import Post from './Post';

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: 'uchihaitachi',
      userImg:
        'https://toppng.com/uploads/preview/itachi-is-back-itachi-uchiha-face-11563232968zcoflmkukx.png',
      img: 'https://besthqwallpapers.com/Uploads/8-3-2022/192752/thumb-itachi-uchiha-naruto-shippuden-naruto-characters-uchiha-itachi-japanese-manga.jpg',
      caption: 'Nice picture',
    },
    {
      id: 2,
      username: 'hatakekakashi',
      userImg:
        'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20200902114417&path-prefix=tr',
      img: 'https://midwestcleanenergycenter.org/wp-img/naruto/why-does-kakashi-hatake-always-wear-a-mask.gif',
      caption: 'New picture',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
