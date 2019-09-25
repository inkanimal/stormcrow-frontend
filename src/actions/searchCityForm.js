export const updateSearchCityForm = formData => {
    return {
        type: "UPDATE_SEARCH_CITY_FORM",
        formData
    }
}

export const resetSearchCityForm = () => {
    return {
      type: "RESET_SEARCH_CITY_FORM"
    }
  }