import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

import { API } from "lib/utils";

export const useDeleteDevice = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteDeviceAsync,
    isSuccess,
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

  useEffect(() => {
    if (!isSuccess) return;
    // refresh list after delete
    queryClient.invalidateQueries("get-devices");
  }, [queryClient, isSuccess]);

  return { ...rest, isSuccess, deleteDeviceAsync };
};
