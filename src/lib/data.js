export const getFeatures = async () => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/features`);

    return res.json();
}

export const getAllDestinations = async () => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/destinations`);

    return res.json();
};

export const getDestinationById = async (detailsId, token) => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/destination-details/${detailsId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.json();
}

export const getAllBooking = async (userId, token) => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/my-bookings/user/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return res.json();
}