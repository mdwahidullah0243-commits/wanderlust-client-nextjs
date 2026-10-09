import { playfairDisplay } from "@/app/layout";
import Image from "next/image";
import { BsDashLg } from "react-icons/bs";

const TravelersCard = ({ comment, author, profile, from }) => {
    return (
        <div className="flex justify-between gap-8 border border-slate-300 rounded-xl p-5">
            <div className="flex flex-col justify-between">
                <p className={`${playfairDisplay.className} text-lg font-semibold`}>
                    "{comment}"
                </p>

                <div className="flex gap-2 text-[#0abde3] font-medium text-lg">
                    <BsDashLg className="mt-1" />
                    <p className="flex flex-col">
                        <span>{author}</span>
                        <span className="text-slate-600 text-base font-medium">{from}</span>
                    </p>
                </div>
            </div>

            <Image
                src={profile}
                alt={author}
                width={300}
                height={200}
                className="rounded-xl"
            />
        </div>
    );
};

export default TravelersCard;