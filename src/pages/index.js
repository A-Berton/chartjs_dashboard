import Head from 'next/head'
import { Inter } from 'next/font/google'
import SidebarMenu from '@/components/SidebarMenu'
import Profile from '@/components/Profile';
import Sales from '@/components/Sales';
import SearchBar from '@/components/SearchBar';
import TotalStats from '@/components/TotalStats';
import PopularProduct from '@/components/PopularProduct';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chart.js dashboard</title>
        <meta name="description" content="A dashboard created with React and Chart.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-2'>
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-10">
          <Profile></Profile>
          <TotalStats></TotalStats>
          <Sales></Sales>
        </div>
      </div> */}

      <div className="flex">
          {/*Sidebar*/}
          <div className="bg-slate-100 w-64 h-screen text-slate-600">
            <div className="p-3">
            <SidebarMenu></SidebarMenu>
            </div>
          </div>
          {/*Main Content*/}
          
          <div className="flex-1 p-6">
            {/*First Row: 4 Columns*/}
            <div className="p-4 rounded mb-8">
              <SearchBar></SearchBar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <TotalStats></TotalStats>
            </div>
            {/*Second Row: Chart*/}
            <div className="p-4 rounded mb-8">
              <Sales></Sales>
            </div>
            {/*Third Row: 2 Cards*/}
            <div className="p-4 rounded mb-8">
              <PopularProduct></PopularProduct>
            </div>
          </div>
          <div className="w-64 h-screen">
            <div className="p-3">
            <Profile></Profile>
            </div>
          </div>
        </div>
      
      
      
    </>
  )
}
