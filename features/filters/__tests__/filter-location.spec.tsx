import React from 'react';
import { render, screen } from '../../../test/test-utils';
import { FilterLocation } from '../components';

describe('FilterBedrooms component', () => {
  it('renders FilterBedrooms default type', () => {
    const onSelectClickFilter = data => {
      console.log(data);
    };

    render(
      <FilterLocation onClickFilterLocation={onSelectClickFilter} items={[]} activeAddress={[]} />,
    );
    // screen.debug();
    (expect(screen.getByText(/City/i)) as any).toBeInTheDocument();
  });
});
