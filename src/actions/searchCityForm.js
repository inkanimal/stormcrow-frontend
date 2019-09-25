export const updateSearchCityForm = formData => {
    return {
        type: "UPDATE_SEARCHCITY_FORM",
        formData
    }
}

export const resetSearchCityForm = () => {
    return {
      type: "RESET_SEARCHCITY_FORM"
    }
  }