import React from "react";
import ItemCategorie from "./ItemCategorie";
import { categoriesList } from "./constants";

const Categories = () => {
  // const isLoading = useSelector(isLoadingSelector);

  // if (!isLoading) return <Loading />;

  return (
    <div className="flex  w-3/4 max-sm:w-[95%] flex-row	justify-around flex-wrap mt-5">
      {categoriesList &&
        categoriesList.map((item) => (
          <ItemCategorie key={item.id} item={item} id={item.id} />
        ))}
    </div>
  );
};

export default Categories;
