export const IS_FETCHING = "IS_FETCHING";
export const NEED_FETCHING = "NEED_FETCHING";

export const isLoading = (data) => {
  return data === IS_FETCHING;
}
