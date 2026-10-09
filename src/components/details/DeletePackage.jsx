'use client';

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

const DeletePackage = ({ detailsId, packageName, deletePackageAction }) => {
    const handleDeletePackage = async () => {
        const { data } = await authClient.token();

        return deletePackageAction(detailsId, data.token);
    };

    return (
        <AlertDialog>
            <Button variant="danger">
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Travel Package?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete <strong>"{packageName}"?</strong>
                                This action cannot be undone and will permanently remove this travel package from the system.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDeletePackage} slot="close" variant="danger">
                                Delete Package
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeletePackage;