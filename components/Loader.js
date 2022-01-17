import Image from 'next/image'

const LoaderGif = "https://iili.io/cQWK3x.gif";

function Loader() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image className="mx-auto" src={LoaderGif} alt="loading" width={1000}
      height={500}/>
    </div>
  );
}

export default Loader;


