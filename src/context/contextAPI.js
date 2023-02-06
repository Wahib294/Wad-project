import React, { createContext, useState, useEffect } from "react";

import { fetchDatafromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDatafromApi(`search/?q=${query}`)
      .then((data) => {
        console.log(data);
        // setSearchResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        searchResults,
        selectCategories,
        mobileMenu,
        setLoading,
        setSelectCategories,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
