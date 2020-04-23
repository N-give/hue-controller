/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { useOvermind } from '../overmind';

export const LightStatus: React.FC<any> = ({}) => {
  const { state } = useOvermind();
  // console.log(state.lightConfig?.['1']?.state);
  return (
    <div>
      {state.lightConfig
        && Object.keys(state.lightConfig).map((light) => {
          console.log(light);
          return (
            <h1
              css={css`
                color: var(--highlight);
              `}
            >{state.lightConfig?.[light].type}</h1>
          );
      })}
    </div>
  );
}
