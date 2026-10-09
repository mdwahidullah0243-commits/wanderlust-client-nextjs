import { merriweather } from "@/app/layout";
import { MoveRight } from "lucide-react";

const StartYourJourney = () => {
    return (
        <div className="mt-20 bg-[url('/assets/CTA.png')] text-white">
            <div className="bg-black/60 flex flex-col items-center justify-between gap-12 text-center py-25">
                <div className="space-y-5">
                    <h2 className={`${merriweather.className} text-5xl font-medium`}>
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg">
                        Join thousands of travelers who have discovered the world with us
                    </p>
                </div>

                <button className="btn shadow-none bg-white text-slate-900 border border-slate-400 rounded-xl">
                    BOOK YOUR TRIP TODAY
                    <MoveRight />
                </button>
            </div>
        </div>
    );
};

export default StartYourJourney;