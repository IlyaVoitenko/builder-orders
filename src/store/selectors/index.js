export const isLoadingSelector = (state) => state.loading.isLoading;
//header links
export const isShowMenuSelector = (state) => state.menu.isShowMenu;
//categories
export const selectedCategorieSelector = (state) =>
  state.categories.selectedCategorie;
export const productsSelector = (state) => state.categories.products;
export const selectedProductSelector = (state) =>
  state.categories.selectedProduct;
//translation
export const translateSelector = (state) => state.translate.translate;
export const currentLanguageSelector = (state) =>
  state.translate.currentLanguage;
//user form
export const lastnameSelector = (state) => state.userRequest.lastname;
export const emailSelector = (state) => state.userRequest.email;
export const requestUserSelector = (state) => state.userRequest.request;
