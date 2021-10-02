import React from 'react';

import {
  Container,
  Greet,
  TopContainer,
  Button,
} from '../styles/Overview.styles';

/**
 * This is a container file which sends necessary data imports to its
 * corresponding components.
 *
 * Get total number of files synced
 * Get total words highlighted
 * Get time saved based on that
 */

const Overview = () => {
  return (
    <Container>
      <TopContainer>
        <Greet>Good Morning Tulsi 👋</Greet>
        <Button>Add highlights</Button>
        {/* <p>File format not supported. Try adding HTML/CSV format.</p> */}
      </TopContainer>
    </Container>
  );
};

export default Overview;
