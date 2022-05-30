import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components";

import heartButton from "../public/add-to-favourites.svg";
import { Place } from "../types";
import { AppContext } from "./store/appContext";
import { Description, LocationName, PlaceName } from "./StyledComponents";

type Props = {
  regionVisual: string;
  place: Place;
  onClose: () => void;
};

export const LocationModal = ({ place, regionVisual, onClose }: Props) => {
  const router = useRouter();

  const { selectedFavouritePlace, setSelectedFavouritePlace } =
    useContext(AppContext);

  const { placeName, placeImage, location, placeDesc } = place;

  const addToFavouriteList = (place: Place) => {
    setSelectedFavouritePlace(place);
    console.log("favourite: ", selectedFavouritePlace);
  };

  return (
    <MainContainer>
      <ImageFrame>
        <ImageOfPlace src={placeImage} alt="place image" />
      </ImageFrame>
      <Text $regionVisual={regionVisual}>
        <PlaceName>{placeName}</PlaceName>
        <LocationName>{location}</LocationName>
        <HeartButtonWrapper
          onClick={() => {
            addToFavouriteList(place);
          }}
        >
          <Image src={heartButton} alt="add to favourites" />
        </HeartButtonWrapper>
      </Text>
      <Description>{placeDesc}</Description>
      <Back $regionVisual={regionVisual} onClick={onClose}>
        Close
      </Back>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 98;
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const ImageFrame = styled.div`
  z-index: 100;
  overflow: hidden;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ImageOfPlace = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
`;

const Text = styled.div<{
  $regionVisual: string;
}>`
  background-color: ${(props) =>
    props.$regionVisual === "north"
      ? "#248cf9"
      : props.$regionVisual === "lisabon"
      ? "#2E70B2"
      : props.$regionVisual === "central"
      ? "#2DBE5A"
      : props.$regionVisual === "alentejo"
      ? "#FCB743"
      : props.$regionVisual === "algarve"
      ? "#B07420"
      : "transparent"};
  width: 80%;
  height: 120px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  top: -60px;
  z-index: 120;
`;

const HeartButtonWrapper = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  cursor: pointer;
`;

const Back = styled.button<{
  $regionVisual: string;
}>`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  width: 120px;
  font-size: 16px;
  padding: 20px 25px;
  background-color: ${(props) =>
    props.$regionVisual === "north"
      ? "#FCB743"
      : props.$regionVisual === "lisabon"
      ? "#FCB743"
      : props.$regionVisual === "central"
      ? "#2E70B2"
      : props.$regionVisual === "alentejo"
      ? "#B07420"
      : props.$regionVisual === "algarve"
      ? "#FCB743"
      : "transparent"};
  color: ${(props) =>
    props.$regionVisual === "north"
      ? "black"
      : props.$regionVisual === "lisabon"
      ? "black"
      : props.$regionVisual === "algarve"
      ? "black"
      : "#fff5e8"};
  margin-top: 16px;
`;
