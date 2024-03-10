import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

const items = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1709405755015-b7e52f639a0e?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1709525091854-7152bddb6d9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1709405755015-b7e52f639a0e?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1709525091854-7152bddb6d9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1709405755015-b7e52f639a0e?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1709525091854-7152bddb6d9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Items({ currentItems }) {
  return (
    <div
      className={`text-white ${
        window.innerWidth < 768 ? "" : "grid grid-cols-3"
      }`}
    >
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <img src={item.image} alt="No Image" />
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div id="gallery" className="mt-24">
      <h1 className="text-6xl text-white font-[play] text-center">Gallery</h1>
      <div className="flex flex-col justify-center items-center px-8 my-8">
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<IoArrowForward />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<IoMdArrowRoundBack />}
          renderOnZeroPageCount={null}
          className="text-white flex gap-4 justify-center items-center  text-xl pt-8"
        />
      </div>
    </div>
  );
}

const Gallery = () => {
  return <PaginatedItems itemsPerPage={window.innerWidth < 768 ? 1 : 3} />;
};
export default Gallery;
