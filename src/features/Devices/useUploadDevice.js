import { useEffect } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";

import { API } from "lib/utils";

export const useUploadDevice = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: uploadDeviceAsync,
    isSuccess,
    isError,
    ...rest
  } = useMutation(
    async (body) => {
      const api = new API().getInstance();
      const res = await api.post(`devices/upload`, body);
      return res.data;
    },
    {
      mutationKey: "upload-file-device",
    }
  );

  // refresh list after create
  useEffect(() => {
    if (!isSuccess) return;
    queryClient.invalidateQueries("get-devices");
  }, [queryClient, isSuccess]);

  // display error from server if the error occurs
  useEffect(() => {
    if (!isError) return;
    toast.error("Gerät konnte nicht gespeichert werden");
  }, [isError]);

  return { ...rest, isSuccess, isError, uploadDeviceAsync };
};
