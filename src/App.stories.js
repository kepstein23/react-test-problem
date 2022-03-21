// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import React from 'react';

import App from './App';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: App,
  title: 'App'
};

export function clickMeText() {
  return (
    <div>
      <p>Greetings!</p>
      <button type="submit" onClick={() => {}}>click me</button>
    </div>
    
  )
}
export function thanksText() {
  return (
    <div>
      <p>Greetings!</p>
      <button type="submit">thanks</button>
    </div>
    
  )
}
