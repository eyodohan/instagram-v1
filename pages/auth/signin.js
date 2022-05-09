import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

const signin = ({ providers }) => {
  console.log(providers);
  return (
    <>
      <Header />
      <div className='flex justify-center space-x-7 mt-20'>
        <img
          className='hidden object-cover rotate-6 md:inline-flex md:w-48'
          src='https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png'
          alt='instagram-image'
        />
        <div className=''>
          {Object.values(providers).map((provider) => (
            <div className='flex flex-col items-center' key={provider.name}>
              <img
                className='w-32 object-cover '
                src='https://ae01.alicdn.com/kf/Uf48df05519c946799689ffa16d51b672s/Abone-Instagram-20-adet-Deneme-s-r-m.png'
                alt='instagram'
              />
              <p className='text-sm italic my-10 text-center'>
                This app is created for learning purposes
              </p>
              <button
                className='p-3 bg-red-400 text-white rounded-lg hover:bg-red-500'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

// const transformedProviders = [];

// for (const key in providers) {
//   transformedProviders.push({
//     id: key,
//     callbackUrl: providers[key].callbackUrl,
//     id: providers[key].id,
//     name: providers[key].name,
//     signinUrl: providers[key].signinUrl,
//     type: providers[key].type,
//   });
// }
