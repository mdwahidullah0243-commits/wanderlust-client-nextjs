import { merriweather } from "@/app/layout";
import TravelStatisticsCard from "@/components/profile/TravelStatisticsCard";
import { Button } from "@heroui/react";
import { MapPin, SquarePen } from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className="w-10/12 mx-auto my-20">
            <h2 className={`text-3xl font-semibold ${merriweather.className}`}>
                My Profile
            </h2>

            <p className="mt-3 text-base font-medium text-slate-500">
                Manage your account settings and travel preferences
            </p>

            <div className="mt-12 grid grid-cols-12 gap-7">
                <div className="col-span-4 shadow-sm p-5 border border-slate-300 rounded-xl">
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src={'/assets/person1.png'}
                            alt="person"
                            width={150}
                            height={100}
                            className="size-40 rounded-full"
                        />

                        <p className="text-lg font-medium text-center">
                            Sarah Mitchell
                        </p>

                        <p className="flex items-center gap-2 text-slate-500">
                            <MapPin size={20} />
                            <span>San Francisco, CA</span>
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div className="flex justify-between items-center">
                        <p className="text-base font-medium">Member Since</p>
                        <p className="text-base font-medium text-slate-600">Mar 2024</p>
                    </div>

                    <div className="mt-3 flex justify-between items-center">
                        <p className="text-base font-medium">Nationality</p>
                        <p className="text-base font-medium text-slate-600">United States</p>
                    </div>

                    <Button
                        variant="outline"
                        className="mt-5 text-lg font-medium py-2 h-auto rounded-full w-full bg-cyan-500 text-white"
                    >
                        <SquarePen /> Edit Profile
                    </Button>
                </div>

                <div className="col-span-8 space-y-3">
                    <h3 className="text-lg font-semibold">
                        Travel Statistics
                    </h3>

                    <div className="grid grid-cols-2 gap-5">
                        <TravelStatisticsCard
                            title={'Total Bookings'}
                            number={12}
                            icon={'/assets/bookings.png'}
                        />

                        <TravelStatisticsCard
                            title={'Countries Visited'}
                            number={18}
                            icon={'/assets/countries-visited.png'}
                        />

                        <TravelStatisticsCard
                            title={'Upcoming Trips'}
                            number={2}
                            icon={'/assets/upcomming-trips.png'}
                        />

                        <TravelStatisticsCard
                            title={'Total Spent'}
                            number={'$15,750'}
                            icon={'/assets/spent.png'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;