import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Photo = ({ url, description }) => {
  return <StyledPhoto src={url} alt={description} />;
};
