import React from 'react';
import ColumnSelectExample from '../examples/ColumnSelectExample'

import { Header } from './Header';
import './page.css';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Pages in Storybook</h2>
      <ColumnSelectExample />
    </section>
  </article>
);
