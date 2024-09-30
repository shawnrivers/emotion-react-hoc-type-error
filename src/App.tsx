import { css } from '@emotion/react';

const App: React.FC = () => {
  return (
    <div
      css={css`
        padding: 2rem;
      `}
    >
      <h1>Emotion React HOC Type Error</h1>
    </div>
  );
};

export default App;
