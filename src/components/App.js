import React from 'react';

export default function App({onClick, buttonText}) {
  return (
    <div>
        <p>Greetings!</p>
        <button type="submit"onClick = {onClick}>{buttonText}</button>
      </div>
  )
}