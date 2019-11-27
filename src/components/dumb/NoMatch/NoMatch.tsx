import React, { StatelessComponent } from 'react';
import Layout from '../../views/Layout/Layout';
import Animation from '../Animation/Animation';

export const NoMatch: StatelessComponent<{ location: any }> = ({ location }) => (
  <Layout>
    <Animation animation={'404'} style={{ marginTop: '40px', width: '100%' }} />
  </Layout>
);
