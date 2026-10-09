import ChooseCard from "./ChooseCard";

const WhyChooseWanderlust = () => {
    return (
        <div className="mt-20 bg-[#edfcff] py-20 px-20 space-y-10">
            <div className="text-center space-y-2">
                <h2 className={`text-3xl font-semibold`}>
                    Why Choose Wanderlust
                </h2>
                <p className="text-base font-medium text-slate-500">
                    Your trusted partner for exceptional travel experiences
                </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <ChooseCard
                    icon={'/assets/ShieldCheck.png'}
                    title={'Safe & Secure'}
                    description={'Your safety is our priority with comprehensive travel insurance and 24/7 support.'}
                />

                <ChooseCard
                    icon={'/assets/MapTrifold.png'}
                    title={'Expert Guides'}
                    description={'Local experts who bring destinations to life with authentic cultural insights.'}
                />

                <ChooseCard
                    icon={'/assets/Headset.png'}
                    title={'24/7 Support'}
                    description={'Round-the-clock customer service to assist you wherever your journey takes you.'}
                />
            </div>
        </div>
    );
};

export default WhyChooseWanderlust;