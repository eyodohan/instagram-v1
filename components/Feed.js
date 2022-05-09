import Posts from './Posts';
import Stories from './Stories';

const Feed = () => {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>

      <section>
        {/* mini profile */}

        {/* suggestions */}
      </section>
    </main>
  );
};

export default Feed;
