export const isShowMenuSelector = (state) => state.menu.isShowMenu;
export const selectedCategorieSelector = (state) =>
  state.categories.selectedCategorie;
export const productsSelector = (state) => state.categories.products;
export const selectedProductSelector = (state) =>
  state.categories.selectedProduct;
export const translateSelector = (state) => state.translate.translate;
export const currentLanguageSelector = (state) =>
  state.translate.currentLanguage;
