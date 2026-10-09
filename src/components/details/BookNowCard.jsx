import { merriweather } from "@/app/layout";
import HighlightList from "./HighlightList";
import DepartureDate from "./DepartureDate";
import { createBookingPackage } from "@/lib/action";

const BookNowCard = ({ destination }) => {
    const { amount } = destination;

    return (
        <>
            <div>
                <p className="text-slate-600 font-medium">Starting from</p>
                <p className={`${merriweather.className} text-2xl font-semibold text-[#15a1bf]`}>${amount}</p>
                <p className="text-slate-600 font-medium">per person</p>
            </div>

            <DepartureDate destination={destination} createBookingPackageAction={createBookingPackage} />

            <div className="space-y-2">
                <HighlightList content={'Free cancellation up to 7 days'} />
                <HighlightList content={'Travel insurance included'} />
                <HighlightList content={'24/7 customer support'} />
            </div>
        </>
    );
};

export default BookNowCard;