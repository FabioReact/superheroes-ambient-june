// Si je suis en train de charger (loading), alors j'affiche un Loader et je n'affiche pas le composant
// Sinon j'affiche le composant voulu

import { render, screen } from '@testing-library/react';
import Waiting from './Waiting';
import '@testing-library/jest-dom';

describe('Waiting Component', () => {
  it('should render Loader if component is loading is true', () => {
    // Il faut que loading = true
    render(<Waiting loading={true} />);
    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
  });

  it('should render component if loading state is false', () => {
    // Il faut que loading = false
    render(<Waiting loading={false} />);
    const loader = screen.queryByRole('status');
    expect(loader).not.toBeInTheDocument();
  });
});
