import { merriweather } from "@/app/layout";
import BookingCard from "@/components/my-bookings/BookingCard";
import { auth } from "@/lib/auth";
import { getAllBooking } from "@/lib/data";
import { headers } from "next/headers";

const MyBookingsPage = async ({ params }) => {
    const { userId } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const allBooking = await getAllBooking(userId, token);

    return (
        <div className="w-10/12 mx-auto my-15">
            <h2 className={`${merriweather.className} text-4xl font-semibold`}>
                My Bookings
            </h2>

            <p className="text-sm font-medium text-slate-500 mt-3">
                Manage and view your upcoming travel plans
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6">
                {
                    allBooking.map(booking => (
                        <BookingCard key={booking._id} booking={booking} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;