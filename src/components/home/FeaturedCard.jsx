import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarSync, MapPinCheck, MoveUpRight } from "lucide-react";
import Link from "next/link";

const FeaturedCard = ({ destination }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            className="group relative w-100 shrink-0"
        >
            <div className="space-y-2 border border-slate-300 rounded-xl p-5">
                <Image
                    src={destination.imageUrl}
                    alt={destination.name}
                    width={500}
                    height={300}
                    className="h-full w-full rounded-xl"
                />

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

                <Link href={`/destination-details/${destination._id}`}>
                    <button className="btn bg-none border-none text-[#0abde3] text-base">
                        <span className="underline decoration-dotted underline-offset-4">Book Now</span>
                        <MoveUpRight size={20} />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default FeaturedCard;