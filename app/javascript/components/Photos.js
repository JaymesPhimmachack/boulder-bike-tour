import React, { useState, useEffect } from "react";
import { Photo } from "./Photo";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";
import styled from "styled-components";

const StyledPhotos = styled.div`
  display: grid;
  margin: 4rem auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 10px;

  @media (max-width: 1150px) {
    margin: 0 20px;
  }
`;

const Photos = ({ handleClick }) => {
  const [photoGallery, setPhotoGallery] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        `${process.env.FLICKR_URL}&api_key=${process.env.FLICKR_KEY}`
      );
      const { photos } = await response.json();

      if (photos) {
        setPhotoGallery([...photoGallery, ...photos.photo]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderPhoto = () => {
    return photoGallery.map((photo) => (
      <Photo
        className='photos__image'
        handleClick={handleClick}
        key={photo.id}
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
      />
    ));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <InfiniteScroll
      dataLength={photoGallery.length}
      next={fetchPhotos}
      hasMore={true}
      loader={<Loader />}
    >
      <StyledPhotos>{renderPhoto()}</StyledPhotos>
    </InfiniteScroll>
  );
};

export default Photos;
