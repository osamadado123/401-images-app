import React, { useState } from "react";
import ImageCards from "./ImageCards";
import image from "./imgs.json";
import Row from "react-bootstrap/Row";

function Images() {
  let [totalLikes, setTotalLikes] = useState(0);

  const summationOfImagesLikes = () => {
    setTotalLikes(totalLikes + 1);
  };
  return (
    <>
      <h5 style={{margin:'20px',"margin-buttom":"50px",}}>your images have {totalLikes} likes</h5>
      <Row xs={1} md={4} style={{marginLeft:'1rem'}}>
        {image.map((image) => {
          return (
            <div>
              <ImageCards 
                image_url={image.image_url}
                _id={image._id}
                title={image.title}
                likes={image.likes}
                sumLikes={summationOfImagesLikes}
              />
            </div>
          );
        })}
      </Row>
    </>
  );
}

export default Images;