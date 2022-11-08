import { SessionProvider } from 'next-auth/react';
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
      <div  className={`relative min-h-screen overflow-auto bg-gradient-to-br from-transparent to-blue-50`} {...divProps}>
        <Header />
        <main className="relative w-full font-sans text-gray-900 bg-white  min-h-[90vh] grid grid-cols-12">
          <Aside/>
          <article className='relative overflow-y-scroll flex-1 col-span-12 lg:col-span-10 w-full justify-center items-center'>
          {children}
          </article>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
