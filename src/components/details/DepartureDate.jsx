'use client';

import { authClient } from "@/lib/auth-client";
import { Calendar, DateField, DatePicker, Label } from "@heroui/react";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const DepartureDate = ({ destination, createBookingPackageAction }) => {
    const { data } = authClient.useSession();
    const [departureDate, setDepartureDate] = useState(null);

    const user = data?.user;
    const { _id, name, amount, imageUrl, location } = destination;

    const handleBooking = async () => {
        const bookingData = {
            bookingId: _id,
            bookingName: name,
            price: amount,
            imageUrl,
            location,
            departureDate: new Date(departureDate),
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image
        };

        const res = createBookingPackageAction(_id, bookingData);

        if(res) {
            toast.success(`${bookingData.bookingName} - booking successful`);
        };
    };

    return (
        <div className="space-y-5">
            <DatePicker onChange={setDepartureDate} className="w-72" name="date">
                <Label className="text-slate-600 font-semibold">Departure Date</Label>
                <DateField.Group fullWidth>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    <DateField.Suffix>
                        <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                    </DateField.Suffix>
                </DateField.Group>
                <DatePicker.Popover>
                    <Calendar aria-label="Event date">
                        <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                                <Calendar.YearPickerTriggerHeading />
                                <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                        </Calendar.Header>
                        <Calendar.Grid>
                            <Calendar.GridHeader>
                                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                        </Calendar.Grid>
                        <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                                {({ year }) => <Calendar.YearPickerCell year={year} />}
                            </Calendar.YearPickerGridBody>
                        </Calendar.YearPickerGrid>
                    </Calendar>
                </DatePicker.Popover>
            </DatePicker>

            <button onClick={handleBooking} className="btn w-full py-2 h-auto bg-[#15a1bf] text-base text-slate-200">
                Book Now
                <MoveRight size={20} />
            </button>
        </div>
    );
};

export default DepartureDate;