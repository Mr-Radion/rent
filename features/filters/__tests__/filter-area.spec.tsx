import React from 'react';
import { render, screen } from '../../../test/test-utils';
import { FilterArea } from '../components';

describe('FilterArea component', () => {
  it('renders FilterArea default type', () => {
    const onSelectClickFilter = area => {
      console.log(area);
    };

    render(<FilterArea onClickFilterArea={onSelectClickFilter} />);
    // screen.debug();
    (expect(screen.getByText(/Square/i)) as any).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<FilterArea cardItems={[]} />, {});
  //   window.alert = jest.fn();
  //   fireEvent.click(getByText('Test Button'));
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  // });
});
