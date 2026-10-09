'use client';

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash } from "lucide-react";

const DeleteBookingAlert = ({ deleteBookingPackageAction, bookingId, bookingName }) => {
    const { data } = authClient.useSession();
    const user = data?.user;

    const handleDeleteBookingPackage = async () => {
        const { data: authToken, error } = await authClient.token();

        return deleteBookingPackageAction(user?.id, bookingId, authToken.token);
    };

    return (
        <AlertDialog>
            <Button className='btn bg-none border border-error rounded-xl text-error'>
                <Trash /> Cancel
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Booking Location?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete <strong>"{bookingName}"?</strong>
                                This action cannot be undone and will permanently remove this travel package from the system.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteBookingPackage} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteBookingAlert;