// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import finleyCody from "../assets/finley-cody.jpg"
// Require CSS
require("normalize.css");



const theme = createTheme({
  primary: "white",
  secondary: "#cc3333",
  tertiary: "#393939",
  quaternary: "#CECECE"
}, {
  primary: {
    name: 'Pacifico',
    googleFont: true,
    styles: ['400', '500']
  },
  secondary: {
    name: 'Cabin',
    googleFont: true,
    styles: ['400', '500', '700']
  },
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={200} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={2} textColor="secondary" fit>
            Happy Holidays
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textFont="secondary" bold>
            From the boys:
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textFont="secondary" size={1} >
          Finley, Jack, Cody, Leo, Sean, TJ, and Sergio
          </Text>
        </Slide>
        <Slide transition={["slide"]} >
          <Image src={finleyCody} alt="finley and cody" />

        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
