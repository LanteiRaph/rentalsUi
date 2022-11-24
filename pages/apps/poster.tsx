import PrimaryLayout from '../../components/layouts/PrimaryLayout';
import PosterTable from '../../components/tables/PosterTable';
import { usePoster } from '../../hooks/usePoster';
import { NextPageWithLayout } from '../page';

const Poster: NextPageWithLayout = () => {
  //Get the data to display
  const { loading, error, data } = usePoster();
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`;</>;
  return (
    <section className="m-2 p-4">
      <div className="flex justify-between p-4 items-center">
        <h3 className="leading-tight text-2xl font-bold">Poster</h3>
        <div className="flex justify-around items-center">
          <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
            Post
          </button>
          <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
            UnPost
          </button>
        </div>
      </div>
      {/**Poster Table */}
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <PosterTable tableData={data}/>
      </div>
    </section>
  );
};

export default Poster;

Poster.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
