import React from 'react';
import { render, screen } from '../../../test/test-utils';
import { FilterBedrooms } from '../components';

describe('FilterBedrooms component', () => {
  it('renders FilterBedrooms default type', () => {
    const onSelectClickFilter = data => {
      console.log(data);
    };

    render(
      <FilterBedrooms
        onClickFilterBedroomsCounter={onSelectClickFilter}
        onClickFilterBedroomsType={onSelectClickFilter}
        items={[]}
        activeLabelCounter={[]}
        activeLabelType={[]}
      />,
    );
    // screen.debug();
    (expect(screen.getByText(/Rooms/i)) as any).toBeInTheDocument();
  });
});
