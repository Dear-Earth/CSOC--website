import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import photo1 from "../Photos/groupPhoto.jpg";
import photo2 from "../Photos/WhatsApp Image 2024-03-13 at 15.23.22_368e53d6.jpg";
import photo3 from "../Photos/WhatsApp Image 2024-03-13 at 15.21.18_209c2430.jpg";
import photo4 from "../Photos/WhatsApp Image 2024-03-13 at 15.21.18_0368d12b.jpg";
import p1 from "../Photos/1p.jpg";
import p2 from "../Photos/Snapinsta.app_337145991_203819605669957_4226280634022582269_n_1080.jpg";
import p3 from "../Photos/Snapinsta.app_337175720_227656459817714_6917249062581790596_n_1080.jpg";
import p4 from "../Photos/Snapinsta.app_337193000_910522000161838_8583867354731112464_n_1080.jpg";
import p5 from "../Photos/Snapinsta.app_343307192_210013421746802_9199040885179310671_n_1080 (1).jpg";
import p6 from "../Photos/Snapinsta.app_351243657_1588537758336477_559469572929077738_n_1080.jpg";
import p7 from "../Photos/Snapinsta.app_351243657_1588537758336477_559469572929077738_n_1080.jpg";
import p8 from "../Photos/Snapinsta.app_352438636_266742932541273_583583506427224302_n_1080.jpg";
import p9 from "../Photos/Snapinsta.app_375588506_337819371913986_782398518134552177_n_1080.jpg";
import p10 from "../Photos/Snapinsta.app_375630045_1305367226772906_2123264859607851317_n_1080.jpg";
import p11 from "../Photos/Snapinsta.app_375729932_274076132059951_1639699030671031439_n_1080.jpg";
import p12 from "../Photos/Snapinsta.app_375842431_123360857501967_3943713156263684485_n_1080.jpg";
import p13 from "../Photos/Snapinsta.app_376248967_1236846217004183_6831166600425937228_n_1080.jpg";
import p14 from "../Photos/WhatsApp Image 2024-03-13 at 15.21.18_0368d12b.jpg";
import p15 from "../Photos/2p.jpg";



const items = [
  {
    image: photo2,
  },
  {
    image: photo1,
  },
  {
    image: photo3,
  },
  {
    image: photo4,
  },
  {
    image: p1,
  },
  {
    image: p2,
  },
  {
    image: p3,
  },
  {
    image: p4,
  },
  {
    image: p5,
  },
  {
    image: p6,
  },
  {
    image: p7,
  },
  {
    image: p8,
  },
  {
    image: p9,
  },
  {
    image: p10,
  },
  {
    image: p11,
  },
  {
    image: p12,
  },
  {
    image: p13,
  },
  {
    image: p14,
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
            <img src={item.image} alt="No Image" className="object-cover w-full h-full px-3"/>
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
