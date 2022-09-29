import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import { API } from "lib/utils";
import { toast } from "react-toastify";

/**
 * @description custom hook used to delete a device from the server
 */
export const useDeleteDevice = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteDeviceAsync,
    isSuccess,
    isError,
    ...rest
  } = useMutation(
    async (id) => {
      const api = new API().getInstance();
      const res = await api.delete(`devices/${id}`);
      return res.data;
    },
    {
      mutationKey: "delete-device",
    }
  );

  // refresh list after delete
  useEffect(() => {
    if (!isSuccess) return;
    queryClient.invalidateQueries("get-devices");
  }, [queryClient, isSuccess]);

  // display error from server if the error occurs
  useEffect(() => {
    if (!isError) return;
    toast.error("Gerät konnte nicht gelöscht werden");
  }, [isError]);

  return { ...rest, isSuccess, isError, deleteDeviceAsync };
};
