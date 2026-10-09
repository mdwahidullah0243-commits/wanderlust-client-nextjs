import BookNowCard from "@/components/details/BookNowCard";
import DeletePackage from "@/components/details/DeletePackage";
import DetailsLeftPart from "@/components/details/DetailsLeftPart";
import UpdatePackage from "@/components/details/UpdatePackage";
import { deleteDestinationPackage } from "@/lib/action";
import { auth } from "@/lib/auth";
import { getDestinationById } from "@/lib/data";
import { MoveLeft } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const DestinationDetailsPage = async ({ params }) => {
    const { detailsId } = await params;
    
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const destination = await getDestinationById(detailsId, token);

    const { imageUrl, name } = destination;

    return (
        <div className="w-10/12 mx-auto my-15">
            <div className="flex justify-between items-center">
                <Link href={'/destinations'}>
                    <button className="btn gap-2 bg-none border-none text-slate-600 text-base font-medium">
                        <MoveLeft /> Back to Destinations
                    </button>
                </Link>

                <div className='flex items-center gap-2'>
                    <UpdatePackage detailsId={detailsId} />

                    <DeletePackage detailsId={detailsId} packageName={name} deletePackageAction={deleteDestinationPackage} />
                </div>
            </div>

            <div className="mt-7">
                <Image
                    src={imageUrl}
                    alt="des"
                    width={300}
                    height={200}
                    className="w-full h-120 rounded-xl"
                />
            </div>

            <div className="mt-12 grid grid-cols-12 gap-5">
                <div className="col-span-8">
                    <DetailsLeftPart destination={destination} />
                </div>

                <div className="col-span-4 space-y-5 border border-slate-300 rounded-xl p-5 shadow-sm">
                    <BookNowCard destination={destination} />
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;