import Image from "next/image";
import { NextRouter, withRouter } from "next/router";

import styled from "styled-components";

import { PlaceCard } from "../components/PlaceCard";
import { BackWrapper } from "../components/StyledComponents";

import { PLACES } from "../dummy-data/places";
import { getRegionById } from "../functions/functions";

import back from "../public/back-icon.svg";
import { Place, RegionVisual } from "../types";

type Props = {
  router: NextRouter;
  place: Place;
  placeName: string;
  placeImage: string;
  location: string;
  regionVisual: RegionVisual;
};

const ListOfPlaces = ({ router, place }: Props) => {
  const { regionId, regionVisual } = router.query;

  // console.log("regionVisual", regionVisual);

  const placesAccordingToRegion = PLACES.filter(
    (place) => place.region === regionId
  ).map((place) => (
    <CardsContainer key={place.id}>
      <PlaceCard
        place={place}
        // placeName={place.placeName}
        // placeImage={place.placeImage}
        // location={place.location}
        // placeDesc={place.placeDesc}
        regionVisual={regionVisual as RegionVisual}
      />
    </CardsContainer>
  ));
  // console.log(placesAccordingToRegion);

  const getRegionName = getRegionById(regionId as string)?.regionName;

  return (
    <PageContainer>
      <BackWrapper onClick={() => router.back()}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextWrapper>
          <Places>Places to visit in </Places>
          <RegionName>{getRegionName}</RegionName>
        </TextWrapper>
        <MainListContainer>{placesAccordingToRegion}</MainListContainer>
      </div>
    </PageContainer>
  );
};

export default withRouter(ListOfPlaces);

const PageContainer = styled.div`
  padding-bottom: 100px;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  margin-top: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  margin-top: 50px;
  color: #13406c;
  width: 300px;
`;

const Places = styled.div`
  font-size: 20px;
`;

const RegionName = styled.div`
  font-size: 40px;
`;
