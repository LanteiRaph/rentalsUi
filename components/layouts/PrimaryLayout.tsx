import Head from 'next/head';
import Aside from '../navigation/aside/aside';
import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Lansan | MyCareTaker</title>
      </Head>
      <div  className={`relative min-h-screen overflow-auto`}>
        <Header />
        {/* <main classNameName="relative flex w-full h-screen font-sans text-gray-900 bg-white">
          <Aside/>
          <article classNameName='relative overflow-y-scroll flex-1'>
          {children}
          </article>
        </main>
        <Footer /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
