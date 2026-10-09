import Image from "next/image";

const TravelStatisticsCard = ({ title, icon, number }) => {
    return (
        <div className="flex justify-between items-center border border-slate-300 rounded-xl p-5 shadow-sm">
            <div>
                <h3 className="text-sm font-medium text-slate-500">{title}</h3>
                <p className="text-lg font-medium">{number}</p>
            </div>

            <Image
                src={icon}
                alt={title}
                width={50}
                height={50}
                className=""
            />
        </div>
    );
};

export default TravelStatisticsCard;