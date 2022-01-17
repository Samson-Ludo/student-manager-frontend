import Image from 'next/image'

const LoaderGif = "https://iili.io/cQWK3x.gif";

function Loader() {
  return (
    <div>
      <Image className="mx-auto" src={LoaderGif} alt="loading" width={200}
      height={200}/>
    </div>
  );
}

export default Loader;


