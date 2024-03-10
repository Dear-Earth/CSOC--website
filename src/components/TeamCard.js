import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App({cardno,info}) {
  const settings = {
    dots: (cardno==1) ? false:true,
    infinite: true,
    speed: 500,
    slidesToShow: cardno,
    slidesToScroll: cardno
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="py-16">
      <Slider {...settings}>
        {info.map((d) => (
          <div key={d.name} className=" h-[400px] text-black rounded-xl px-4">
            <div className='h-56 bg-white flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-full w-full object-contain pt-6"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.post}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}



export default App;