import React, { useEffect, useReducer } from 'react'
import fetchRestaurants from '../apis/restaurants'
import styled from 'styled-components'
import MainLogo from '../images/logo.png'
import MainCoverImage from '../images/main-cover-image.png'
import restaurantsReducer, { initialState, restaurantsActionTypes } from '../reducers/restaurants';
import GetRestaurants from '../type/getRestaurants'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

const Restaurants = () => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  useEffect(() => {
    fetchRestaurants()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      {/* {
        state.restaurantsList.map((restaurant: Restaurant) =>
          <div key={restaurant.name}>
            {restaurant.name}
          </div>
        )
      } */}
    </>
  )
}

export default Restaurants