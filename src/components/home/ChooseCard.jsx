import { geistSans } from "@/app/layout";
import Image from "next/image";

const ChooseCard = ({ icon, title, description }) => {
    return (
        <div className="bg-base-100 border border-slate-300 rounded-xl p-5 space-y-2">
            <Image
                src={icon}
                alt={title}
                width={50}
                height={50}
            />

            <h2 className={`text-xl font-semibold ${geistSans.className}`}>{title}</h2>
            
            <p className="text-base font-medium text-slate-500">
                {description}
            </p>
        </div>
    );
};

export default ChooseCard;