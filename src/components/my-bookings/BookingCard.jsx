import { merriweather } from '@/app/layout';
import { format } from 'date-fns';
import { Eye, MapPinHouse, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi';
import DeleteBookingAlert from './DeleteBookingAlert';
import { deleteBookingPackage } from '@/lib/action';
import Link from 'next/link';

const BookingCard = ({ booking }) => {
    const { _id, bookingId, imageUrl, bookingName, departureDate, price } = booking;

    return (
        <div className='grid grid-cols-12 gap-8 border border-slate-300 rounded-xl p-5'>
            <div className='col-span-5'>
                <Image
                    src={imageUrl}
                    alt={bookingName}
                    width={300}
                    height={100}
                    className='w-full h-50 rounded-xl'
                />
            </div>

            <div className='col-span-4 flex flex-col justify-between'>
                <div className="badge badge-soft badge-success">
                    <GiConfirmed /> Confirmed
                </div>

                <h3 className={`${merriweather.className} text-2xl font-semibold`}>
                    {bookingName}
                </h3>

                <div className='flex items-center gap-2 text-slate-500 text-base font-medium'>
                    <BsCalendar2DateFill />
                    <span>
                        {format(new Date(departureDate), 'dd/LL/yyyy')}
                    </span>
                </div>

                <div className='flex items-center gap-2 text-slate-500 text-base font-medium'>
                    <MapPinHouse />
                    <span>Booking ID: {bookingId}</span>
                </div>

                <p className='text-3xl font-semibold text-[#15a1bf]'>
                    ${price}
                </p>
            </div>

            <div className='col-span-3 self-end flex items-center gap-2'>
                <DeleteBookingAlert deleteBookingPackageAction={deleteBookingPackage} bookingId={_id} bookingName={bookingName} />

                <Link href={`/destination-details/${bookingId}`}>
                    <button className='btn bg-[#15a1bf] text-white rounded-xl'>
                        <Eye /> View
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookingCard;