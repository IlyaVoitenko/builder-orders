import { Link } from "react-router-dom";
import {
  setSelectedCategorie,
  setSelectedProduct,
} from "../../../../store/reducer/categories";
import { useDispatch } from "react-redux";

const ItemProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/product/${encodeURIComponent(item.title.trim())}`}
      target="_blank"
      onClick={() => {
        dispatch(setSelectedCategorie(item.subcategorie || item.type));
        dispatch(setSelectedProduct(item));
      }}
    >
      <figure className="flex flex-col  mt-5  ">
        <img
          src={item.src}
          className=" max-w-[300px] max-h-[300px] object-contain"
          alt="product"
        />
        <figcaption className="text-left mt-3 font-bold text-blue-500">
          {item.title}
        </figcaption>
        <p className="text-left mt-3">{item.price}</p>
      </figure>
    </Link>
  );
};

export default ItemProduct;
