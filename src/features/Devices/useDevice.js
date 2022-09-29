import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { API } from "lib/utils";

export const useDevice = (id, config) => {
  const {
    refetch: reloadDevices,
    isError,
    ...rest
  } = useQuery(
    ["get-device-by-id", id],
    async () => {
      const api = new API().getInstance();
      const res = await api.get(`devices/${id}`);
      return res.data;
    },
    {
      enabled: !!id,
      ...config,
    }
  );

  // display error from server if the error occurs
  useEffect(() => {
    if (!isError) return;
    toast.error("Gerät konnte nicht abgerufen werden");
  }, [isError]);

  return { ...rest, isError, reloadDevices };
};
