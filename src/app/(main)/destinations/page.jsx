import { merriweather, playfairDisplay } from "@/app/layout";
import DestinationCard from "@/components/destinations/DestinationCard";
import FilteredOptionsByDropdown from "@/components/destinations/FilteredOptionsByDropdown";
import { getAllDestinations } from "@/lib/data";

const DestinationsPage = async () => {
    const allDestinations = await getAllDestinations();

    return (
        <div className="my-15 w-10/12 mx-auto space-y-8">
            <div className="space-y-2">
                <h2 className={`text-3xl font-semibold ${merriweather.className}`}>
                    Explore All Destinations
                </h2>
                <p className={`text-sm font-medium text-slate-500`}>
                    Find your perfect travel experience from our curated collection
                </p>
            </div>

            <div className="flex items-center gap-5">
                <FilteredOptionsByDropdown fieldName={'CATEGORY'} />
                <FilteredOptionsByDropdown fieldName={'PRICE RANGE'} />
                <FilteredOptionsByDropdown fieldName={'SORT BY'} />
            </div>

            <div className="space-y-5">
                <h3 className="text-base font-semibold text-slate-600">
                    Showing {4} destinations
                </h3>

                <div className="grid grid-cols-3 gap-8">
                    {
                        allDestinations.map(destination => (
                            <DestinationCard key={destination._id} destination={destination} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DestinationsPage;