import { useState } from "react";

import { SORT_ORDER } from "lib/constants";

/**
 * @description custom hook to handle paging, sorting and etc in a declarative way
 * @param {Object} initialFilter initial values for the filters
 * @param {function} resetData reset function called on sort change, etc.
 * @returns state that is preserving the filters
 */
export const useQueryParams = (initialFilter, resetData) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(initialFilter.pageSize || 10);

  const [order, setOrder] = useState(initialFilter.order || SORT_ORDER.ASC);
  const [orderBy, setOrderBy] = useState(initialFilter.orderBy);

  const onOrderChange = (newOrderBy, newOrder = SORT_ORDER.ASC) => {
    if (resetData) resetData();

    setPageNumber(1);
    setOrderBy(newOrderBy);
    setOrder(newOrder);
  };

  return [
    {
      pageNumber,
      setPageNumber,
      pageSize,
      setPageSize,
    },
    { order, orderBy, onOrderChange },
  ];
};
