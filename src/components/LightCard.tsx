/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { useOvermind } from '../overmind';

export const LightCard: React.FC<any> = ({ light }) => {
  const { state } = useOvermind();

  return (
    <div
      css={css`
        box-shadow: 0 8px 16px 0 var(--highlight);
      `}
    >
      <div
        css={css`
          padding: 10px 10px 10px 10px;
        `}
      >
        <h2>{state.lightConfig[light].name}</h2>
        <label>xy: </label>
        <input
          type="text"
          id="xy"
          name="xy"
          placeholder={`${state.lightConfig[light].state.xy}`}
        />
        <input type="submit" />
      </div>
    </div>
  );
}
