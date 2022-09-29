import { useQuery } from "react-query";

import { API, getQueryParams } from "lib/utils";

export const useDevices = (params, config) => {
  const { refetch: reloadDevices, ...rest } = useQuery(
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

  return { ...rest, reloadDevices };
};
