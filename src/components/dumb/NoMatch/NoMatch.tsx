import React, { StatelessComponent } from 'react';

export const NoMatch: StatelessComponent<{ location: any }> = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
