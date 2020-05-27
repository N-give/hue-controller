/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { useOvermind } from '../overmind';

import { LightCard } from './LightCard';

export const Lights: React.FC<any> = ({}) => {
  const { state } = useOvermind();
  // console.log(state.lightConfig?.['1']?.state);

  return (
    <div>
      {state.lightConfig
        && Object.keys(state.lightConfig).map((light) => {
          return <LightCard key={light} light={light} />;
      })}
    </div>
  );
}
