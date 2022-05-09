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
        'https://img03.imgsinemalar.com/images/karakter_buyuk/46534/kakashi-hatake-5.jpg',
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
