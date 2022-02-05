import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useFetchBooks(searchQuery, url, action) {
  const dispatch = useDispatch();
  return useEffect(() => {
    if (searchQuery === "") {
      action([]);
    }
    fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => dispatch(action(data.title)));
  }, [searchQuery, url, action]);
}
