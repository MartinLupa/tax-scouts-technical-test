import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchBooks(debouncedSearchQuery, url, action) {
  const dispatch = useDispatch();
  return useEffect(() => {
    if (debouncedSearchQuery === "") {
      action([]);
    }
    fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => dispatch(action(data.title)));
  }, [debouncedSearchQuery]);
}
