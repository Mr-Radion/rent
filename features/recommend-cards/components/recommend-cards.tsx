import styled from 'styled-components';
import { MapMarker } from '../../../ui';
import { RecommendedAdsState } from '../ducks';

const CartBlock = styled.div`
  flex-basis: calc((100% / 4) - 3.83rem);
  @media (max-width: 1366px) {
    flex-basis: calc((100% / 4) - 2rem);
  }
  @media (max-width: 1024px) {
    flex-basis: calc((100% / 3) - 1rem);
  }
  @media (max-width: 768px) {
    flex-basis: calc((100% / 3, 3) - 1rem);
  }
  @media (max-width: 600px) {
    flex-basis: calc((100% / 2) - 1rem);
    height: 300px;
  }
  @media (max-width: 500px) {
    flex-basis: calc(100% - 1rem);
  }
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // width: 19.81rem;
  margin-bottom: 20px;
  box-shadow: 0px 2px 8px rgb(119 204 209 / 25%);
  border-radius: 4px;
`;

const CartContent = styled.div`
  padding: 8.25px 10px 8px;
`;

const CartAdress = styled.div`
  padding: 0 13px 11.1px;
  font-weight: 900;
  font-size: 14px;
  line-height: 22px;
  // opacity: 0.8;
  color: #4b4b4b;
  letter-spacing: 0.5px;
  > span {
    padding-right: 7px;
  }
`;

const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 184px;
  background-color: #c4c4c4;
  position: relative;
  img {
    position: absolute;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const PriceBlock = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: 0.5px;
`;

const TextBlock = styled.div`
  font-size: 18px;
  line-height: 26px;
  // opacity: 0.8;
`;

export interface RecommendedAdsItemProps {
  cardItems: RecommendedAdsState[];
}

export const RecommendedAdsItem = ({ cardItems }: RecommendedAdsItemProps): JSX.Element => (
  <>
    {cardItems &&
      cardItems.map(card => (
        <CartBlock key={card.id}>
          <CartWrapper>
            <PhotoBox>
              <img src={card.image} alt={card.name} loading="lazy" decoding="async" />;
            </PhotoBox>
            <CartContent>
              <PriceBlock>
                {card.price}
                <span>€</span>
              </PriceBlock>
              <TextBlock>
                {card.rooms}
                <span> rooms, </span>
                123
                <span> m2</span>
              </TextBlock>
            </CartContent>
            <CartAdress>
              <span>
                <MapMarker width="14" height="17" />
              </span>
              {card.city}
            </CartAdress>
          </CartWrapper>
        </CartBlock>
      ))}
  </>
);
