import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchingPhotos } from "../../features/actionCreators";
import { IPhotos } from "../../types";
import { setPhotosPage } from "../../features/slices/productSlice";
import { addToBasket } from "../../features/slices/basketSlice";

export default function Home() {
  const { photos, error, loader, page, limit } = useAppSelector(
    (s) => s.product
  );
  const dispatch = useAppDispatch();
  const arrayPage = [];
  for (let i = 1; i <= 10; i++) {
    arrayPage.push(i);
  }

  useEffect(() => {
    dispatch(fetchingPhotos(limit, page));
  }, [page]);

  return (
    <div className="container">
      <div className="flex items-center justify-between flex-wrap">
        {loader && <h1>Loading...</h1>}
        {error ? error : " "}
        {photos.map((el: IPhotos) => (
          <>
            <div className="w-96 h-[500px] bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-[300px] h-[280px] ml-[10%] mt-[4%] rounded-t-lg"
                  src={el.url}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {/* {el.albumId} */}
                  {el.id}
                </p>

                <button
                  onClick={() => dispatch(addToBasket(el))}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add To Basket
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex items-center">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        {arrayPage.map((el: number) => (
          <>
            <nav aria-label="Page navigation example">
              <ul className="flex items-center -space-x-px h-8 text-sm mt-6">
                <li onClick={() => dispatch(setPhotosPage(el))}>
                  <button
                    onClick={() => dispatch(setPhotosPage(el))}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {el}
                  </button>
                </li>
              </ul>
            </nav>
          </>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </div>
      <ul></ul>
    </div>
  );
}
