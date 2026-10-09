import { merriweather } from "@/app/layout";
import AddDestination from "@/components/admin/AddDestination";

const AddNewTravelPackagePage = () => {
    return (
        <div className="w-10/12 mx-auto my-15 space-y-10">
            <h2 className={`${merriweather.className} text-3xl font-semibold`}>
                Add New Travel Package
            </h2>

            <AddDestination />
        </div>
    );
};

export default AddNewTravelPackagePage;