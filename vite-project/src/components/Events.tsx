import React from 'react';

export function Events({ events }) {
  return (
    <ul>
      {
        events.map((event, index: number) =>
          <li key={ index }>{ event }</li>
        )
      }
    </ul>
  );
}
