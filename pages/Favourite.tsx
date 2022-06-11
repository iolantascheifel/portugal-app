import styled from "styled-components";
import { useContext } from "react";
import { useRouter } from "next/router";

import { BackWrapper, PlaceCard } from "../components";
import { FavContext } from "../store";
import { RegionVisual } from "../types";

import Image from "next/image";
import back from "../public/back-icon.svg";

const Favourite = () => {
  const router = useRouter();
  const placesCtx = useContext(FavContext);

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
          <Places>Your favourite locations</Places>
        </TextWrapper>
        <MainListContainer>
          {placesCtx.selectedPlaces.map((place) => (
            <div key={"fav" + `${place.location}` + `${place.id}`}>
              <PlaceCard
                place={place}
                regionVisual={place.visual as RegionVisual}
              />
            </div>
          ))}
        </MainListContainer>
      </div>
    </PageContainer>
  );
};

const TextWrapper = styled.div`
  margin-top: 50px;
  color: #13406c;
  width: 300px;
`;

const Places = styled.div`
  font-size: 30px;
`;

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

export default Favourite;
