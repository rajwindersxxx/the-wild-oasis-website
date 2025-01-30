import CabinList from '../_components/CabinList';
import { Suspense } from 'react';
import Spinner from '../_components/Spinner';
import { getCabin, getCabins } from '../_lib/data-service';
import Filter from '../_components/Filter';

export const revalidate = 3600; //it must be value (sec) //no need for dynamic
// export const revalidate = 15; //it must be value (sec)

export const metadata = {
  title: 'cabins',
};
export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? 'all';
  // CHANGE
  const cabins = await getCabins();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className='flex justify-end mb-8'>
        <Filter />
      </div>
      <Suspense fallback={<Spinner />}  key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
