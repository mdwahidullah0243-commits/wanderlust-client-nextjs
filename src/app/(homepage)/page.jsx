import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import StartYourJourney from '@/components/home/StartYourJourney';
import WhatTravelersSay from '@/components/home/WhatTravelersSay';
import WhyChooseWanderlust from '@/components/home/WhyChooseWanderlust';
import { getAllDestinations } from '@/lib/data';
import { Suspense } from 'react';

const HomePage = () => {
    const allDes = getAllDestinations();

    return (
        <div className='mt-20'>
            <FeaturedDestinations allDes={allDes} />

            <WhyChooseWanderlust />

            <WhatTravelersSay />

            <StartYourJourney />
        </div>
    );
};

export default HomePage;