import { MoveRight } from "lucide-react";
import FeaturedCarousel from "./FeaturedCarousel";
import { getFeatures } from "@/lib/data";
import Link from "next/link";

const FeaturedDestinations = async () => {
    const features = await getFeatures();

    return (
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Featured Destinations
                    </h2>
                    <p className="text-slate-600 font-medium">
                        Handpicked travel experiences for the adventure seekers
                    </p>
                </div>

                <Link href={'/destinations'}>
                    <button className="btn bg-none border border-[#0abde3] text-[#0abde3] px-5 py-2 h-auto">
                        All Destinations
                        <MoveRight />
                    </button>
                </Link>
            </div>

            <FeaturedCarousel features={features} />
        </div>
    );
};

export default FeaturedDestinations;