import { merriweather } from "@/app/layout";
import { CalendarDays, MapPinned } from "lucide-react";
import { VscStarFull } from "react-icons/vsc";
import HighlightList from "./HighlightList";

const DetailsLeftPart = ({ destination }) => {
    const { location, name, ratings, reviews, duration, description } = destination;

    return (
        <>
            <div className="flex items-center gap-2 text-slate-600 font-medium">
                <MapPinned />
                <span>{location}</span>
            </div>

            <h3 className={`mt-3 ${merriweather.className} text-3xl font-semibold`}>
                {name}
            </h3>

            <div className="mt-3 flex items-center gap-5 text-base font-medium">
                <div className="flex items-center gap-2">
                    <VscStarFull size={18} color="#1E9E35" />
                    <span>{`${ratings} (${reviews} reviews)`}</span>
                </div>

                <div className="flex items-center gap-2">
                    <CalendarDays />
                    <p>{duration}</p>
                </div>
            </div>

            <div className="space-y-2 mt-8">
                <h3 className={`${merriweather.className} text-2xl font-semibold`}>
                    Overview
                </h3>

                <p className="text-base font-medium text-slate-600">
                    {description}
                </p>
            </div>

            <div className="space-y-3 mt-8">
                <h3 className={`${merriweather.className} text-2xl font-semibold`}>
                    Highlights
                </h3>

                <p className="text-base font-medium text-slate-600">
                    Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                </p>

                <div className="flex gap-15">
                    <div>
                        <HighlightList content={'Luxury beachfront accommodation'} />
                        <HighlightList content={'Traditional Balinese spa treatment'} />
                        <HighlightList content={'Sunrise trek to Mount Batur'} />
                    </div>

                    <div>
                        <HighlightList content={'Visit Uluwatu Temple at sunset'} />
                        <HighlightList content={'Private beach dinner experience'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsLeftPart;