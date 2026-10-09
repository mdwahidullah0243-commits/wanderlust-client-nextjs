import Image from "next/image";
import { CalendarSync, MapPinCheck, MoveUpRight } from "lucide-react";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
    return (
        <div className="space-y-2 border border-slate-300 rounded-xl p-5">
            <div>
                <Image
                    src={destination.imageUrl}
                    alt={destination.name}
                    width={200}
                    height={100}
                    className="h-50 w-full rounded-xl"
                />
            </div>

            <p className="flex items-center text-slate-600 gap-2">
                <MapPinCheck />
                {destination.location}
            </p>

            <div className="flex justify-between items-center text-lg font-semibold">
                <h3 className="">
                    {
                        destination.name.split(' ').slice(0, 2).join(' ')
                    }
                </h3>
                <p className="">
                    ${destination.amount}<span className="text-sm font-medium text-slate-500">/person</span>
                </p>
            </div>

            <p className="flex items-center gap-2 text-slate-600 font-medium">
                <CalendarSync size={20} />
                {destination.duration}
            </p>

            <Link href={`destination-details/${destination._id}`}>
                <button className="btn bg-none border-none text-[#0abde3] text-base">
                    <span className="underline decoration-dotted underline-offset-4">Book Now</span>
                    <MoveUpRight size={20} />
                </button>
            </Link>
        </div>
    );
};

export default DestinationCard;