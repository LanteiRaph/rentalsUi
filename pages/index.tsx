import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';
//Login and page protections
import { Timmer } from '../components/atoms/Timmer';
//Icons
import { GiHouseKeys } from 'react-icons/gi';
import { withSSRAuth } from '../hooks/withSSRAuth';
//Page props
const Home: NextPageWithLayout = () => {
    //Fetch the current user from the database
  return (
    <section className="m-2 p-4">
      <div className="flex items-center justify-between border rounded-sm border-gray-50 p-6">
        <h2 className="leading-relaxed font-bold text-2xl">
          Welcome back <span className="text-base font-light"> David</span>
        </h2>
        <div className="hidden md:block">
          <Timmer />
        </div>
      </div>
      <div className="mt-2 flex md:flex-row flex-col gap-4 items-center justify-between border rounded-sm border-gray-50 p-6">
        {[1, 2, 3,4].map((value) => {
          return (
            <div
              className="w-60 flex flex-col justify-center p-4 border rounded-sm border-gray-50 "
              key={value}
            >
              <h3 className="font-thin">Registered Houses</h3>
              <div className="flex justify-between items-center">
                <p className="font-bold text-2xl leading-relaxed">2000</p>
                <GiHouseKeys className="w-5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
//Get server side props and handle authentication.
export  const getServerSideProps = withSSRAuth( async () => {
  return {
    props:{

    }
  }
})

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
