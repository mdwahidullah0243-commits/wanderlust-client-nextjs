import { MoveLeft, MoveRight } from "lucide-react";
import TravelersCard from "./TravelersCard";
import { Button } from "@heroui/react";
import { geistSans } from "@/app/layout";

const WhatTravelersSay = () => {
    return (
        <div className="w-10/12 mx-auto mt-15 space-y-8">
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <h2 className={`${geistSans.className} text-3xl font-semibold`}>
                        What Travelers Say
                    </h2>
                    <p className="text-base font-medium text-slate-500">
                        Real experiences from our happy travelers
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Button isIconOnly aria-label="More options" variant="tertiary">
                        <MoveLeft />
                    </Button>

                    <Button isIconOnly aria-label="More options" variant="tertiary">
                        <MoveRight />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <TravelersCard
                    comment={'The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.'}
                    author={'Michael Chen'}
                    from={'Singapore'}
                    profile={'/assets/person2.png'}
                />

                <TravelersCard
                    comment={'Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!'}
                    author={'Sarah Johnson'}
                    from={'New York, USA'}
                    profile={'/assets/person1.png'}
                />
            </div>
        </div>
    );
};

export default WhatTravelersSay;