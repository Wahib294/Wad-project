import React, { createContext, useState, useEffect } from "react";

import { fetchDatafromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDatafromApi(`search/?q=${query}`)
      .then((data) => {
        console.log(data.data.contents);
        setSearchResults(data.data.contents);
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
        selectedCategory,
        mobileMenu,
        setLoading,
        setSelectedCategory,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
