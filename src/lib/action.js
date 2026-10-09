import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addDestinationPackage = async (formData) => {
    'use server';

    const packageData = Object.fromEntries(formData.entries());

    await fetch(`${process.env.SERVER_BASE_URL}/admin/add-new-travel-package`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(packageData)
    });

    revalidatePath('/destinations');
    redirect('/destinations');
};


export const updateDestinationPackage = async (detailsId, formData, token) => {
    'use server';

    const updatedPackageData = Object.fromEntries(formData.entries());

    await fetch(`${process.env.SERVER_BASE_URL}/destination-details/${detailsId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedPackageData)
    });

    revalidatePath(`/destination-details/${detailsId}`);
};


export const deleteDestinationPackage = async (detailsId, token) => {
    'use server';

    await fetch(`${process.env.SERVER_BASE_URL}/destination-details/${detailsId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    revalidatePath('/destinations');
    redirect('/destinations');
};


export const createBookingPackage = async (bookingId, bookingData) => {
    'use server';

    const req =  await fetch(`${process.env.SERVER_BASE_URL}/destination-details/${bookingId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    });

    const res = await req.json();

    return res;
};


export const deleteBookingPackage = async (userId, bookingId, token) => {
    'use server';

    await fetch(`${process.env.SERVER_BASE_URL}/my-bookings/user/${userId}/booking/${bookingId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    revalidatePath(`my-bookings/user/${userId}`);
};