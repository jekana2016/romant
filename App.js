import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
});
