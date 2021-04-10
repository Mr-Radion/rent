import React from 'react';
import { render, screen } from '../../../test/test-utils';
import { FilterPrice } from '../components';

describe('FilterPrice component', () => {
  it('renders FilterPrice default type', () => {
    const onSelectClickFilter = data => {
      console.log(data);
    };

    render(<FilterPrice onClickFilterPrice={onSelectClickFilter} />);
    // screen.debug();
    (expect(screen.getByText(/Price/i)) as any).toBeInTheDocument();
  });
});
