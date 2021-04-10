import React from 'react';
import { render, screen } from '../../../test/test-utils';
import { FilterTypeProperty } from '../components';

describe('FilterTypeProperty component', () => {
  it('renders FilterTypeProperty default type', () => {
    const onSelectClickFilter = data => {
      console.log(data);
    };

    render(
      <FilterTypeProperty
        onClickFilterPropertyType={onSelectClickFilter}
        activeLabel=""
        items={[]}
      />,
    );
    // screen.debug();
    (expect(screen.getByText(/Type of property/i)) as any).toBeInTheDocument();
  });
});
