import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { API, getQueryParams } from "lib/utils";

export const useDevices = (params, config) => {
  const {
    refetch: reloadDevices,
    isError,
    ...rest
  } = useQuery(
    ["get-devices", params],
    async () => {
      const api = new API().getInstance();
      const query = getQueryParams(params);
      const res = await api.get(`devices${query ? "?" + query : ""}`);
      return {
        data: res.data,
        total: parseInt(res.headers["x-total-count"]) || 0,
      };
    },
    {
      enabled: true,
      ...config,
    }
  );

  // display error from server if the error occurs
  useEffect(() => {
    if (!isError) return;
    toast.error("Liste konnte nicht abgerufen werden");
  }, [isError]);

  return { ...rest, isError, reloadDevices };
};
