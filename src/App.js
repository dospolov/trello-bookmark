import React from 'react'
import {
  Row,
  Divider,
  Col
} from 'antd'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { RestLink } from 'apollo-link-rest'
import { withClientState } from 'apollo-link-state'
import resolvers from './services/resolvers'
import defaults from './services/defaults'

import FieldWrapper from './components/FieldWrapper'
import Location from './components/Location'
import Position from './components/Position'
import Title from './components/Title'
import Description from './components/Description'
import Link from './components/Link'
import Submit from './components/Submit'
import Labels from './components/Labels'
import DueDate from './components/DueDate'
import DueTime from './components/DueTime'

const restLink = new RestLink({
  uri: 'https://api.trello.com/1/',
})

const cache = new InMemoryCache()

const stateLink = withClientState({ 
  cache,
  defaults,
  resolvers
})

const link = ApolloLink.from([
  restLink,
  stateLink
])

const client = new ApolloClient({
  link,
  cache
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <Row type="flex" justify="space-around">
        <Col span={22}>
          <Divider>Card location</Divider>
          <Row>
            <Col span={17}>
              <Location />
            </Col>
            <Col span={6} offset={1}>
              <FieldWrapper>
                <Position />
              </FieldWrapper>
            </Col>
          </Row>
          
          <Divider>Card details</Divider>
          <Row>
            <Col span={11}>
              <FieldWrapper>
                <Title />
              </FieldWrapper>
            </Col>
            
            <Col span={11}>
              <FieldWrapper>
                <Link />
              </FieldWrapper>
            </Col>
            
            <Col span={11}>
              <FieldWrapper>
                <Description />
              </FieldWrapper>
            </Col>

            <Col span={11}>
              <FieldWrapper>
                <DueDate />
              </FieldWrapper>
            </Col>

            <Col span={11}>
              <FieldWrapper>
                <DueTime />
              </FieldWrapper>
            </Col>
            
            <Col span={11}>
              <Labels />
            </Col>
            
            <Col span={11}>
              <Submit />
            </Col>
            
          </Row>
        </Col>
      </Row>
    </div>
  </ApolloProvider>
)

export default App