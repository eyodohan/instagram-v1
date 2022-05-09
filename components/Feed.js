import Posts from './Posts';
import Stories from './Stories';

const Feed = () => {
  return (
    <main className='grid  grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
      <section className='md:col-span-2'>
        {/* stories */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>

      <section className='hidden md:inline-grid md:col-span-1'>
        {/* mini profile */}

        {/* suggestions */}
      </section>
    </main>
  );
};

export default Feed;
