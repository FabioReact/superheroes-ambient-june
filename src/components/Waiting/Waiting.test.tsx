// Si je suis en train de charger (loading), alors j'affiche un Loader et je n'affiche pas le composant
// Sinon j'affiche le composant voulu

import { render, screen } from '@testing-library/react';
import Waiting from './Waiting';
import '@testing-library/jest-dom';

describe('Waiting Component', () => {
  it('should render Loader if component is loading is true', () => {
    render(
      <Waiting loading={true}>
        <h1>Hello World</h1>
      </Waiting>,
    );
    const loader = screen.getByRole('status');
    const title = screen.queryByRole('heading');
    expect(loader).toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
  });

  it('should not render Loader if loading state is false', () => {
    render(
      <Waiting loading={false}>
        <h1>Hello World</h1>
      </Waiting>,
    );
    const loader = screen.queryByRole('status');
    expect(loader).not.toBeInTheDocument();
  });

  it('should render component if loading state is false', () => {
    render(
      <Waiting loading={false}>
        <h1>Hello World</h1>
      </Waiting>,
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
