import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/collage8.png",
    heading: "Welcome to Embroidery World",
    subheading: "Discover custom designs made with love — unique embroidery crafted to reflect your personal style and story.",
    buttonText: "Shop Now",
    buttonLink: "/cart"
  },
  {
    image: "/images/collage9.png",
    heading: "Upload Your Design",
    subheading: "Upload your custom embroidery design and tell us which fabric or garment you'd like it on — T-shirt, kurti, dupatta, denim, and more.We'll handle the rest!",

   buttonText: "Upload",
    buttonLink: ""
  },
  {
    image: "/images/collage82.png",
    heading: " Bring Your Own Design",
    subheading: "Send us your clothing piece online, choose from our embroidery designs, and get it delivered to your home.",
   buttonText: "Contact Us",
    buttonLink: "/contact"
  }
];


const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  const handleSlideUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`You uploaded: ${file.name}`);
     
    }
  };

  return (
    <div className="slider" style={{ position: "relative" }}>
      <img
        src={currentSlide.image}
        alt={`Slide ${index + 1}`}
        className="slide-img"
       
      />

      <div
        className="slide-content-wrapper"
      
      >
        <div className="slide-content">
          <h1>{currentSlide.heading}</h1>
          <p>{currentSlide.subheading}</p>

          {currentSlide.buttonText === "Upload" ? (
            <>
              <label
                htmlFor="slide-upload"
              style={{ backgroundColor:'#ea580c',padding:'12px', borderRadius:'10px'}}
              >
                Upload Design
              </label>
              <input
                type="file"
                id="slide-upload"
                style={{ display: "none" }}
                onChange={handleSlideUpload}
              />
            </>
          ) : (
            <a href={currentSlide.buttonLink}>
              <button
                
              >
                {currentSlide.buttonText}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Slider;
