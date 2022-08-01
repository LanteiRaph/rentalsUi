import Image from 'next/image';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Lansan.png"
        alt="LanSan Tech"
        width={250}
        height={250}
        priority
      />
      <h1 className="text-lg font-bold">Welcome To Lansan Technologies</h1>
      <h6 className="text-sm font-semibold">
        Where we Build Tomorrow's Technology Today
      </h6>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
