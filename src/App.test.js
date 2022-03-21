import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import Meta, { ClickMe } from './App.stories.js'
import { composeStory } from '@storybook/testing-react';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

const ClickMeStory = composeStory(ClickMe, Meta);

it("the button initially displays click me", () => {
    render(<ClickMeStory/>);
    const linkElement = screen.getByText("click me");
    expect(linkElement).toBeInTheDocument();    
  })

  it("changes on click", () => {
    render(<ClickMeStory/>);
    const handleClick = jest.fn();
    fireEvent.click(screen.getByText("click me"));
    expect(screen.getByText("thanks")).toBeInTheDocument();
  })
    