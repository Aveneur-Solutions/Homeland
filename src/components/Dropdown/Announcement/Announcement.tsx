import React from 'react'
import { Container, List } from 'semantic-ui-react'
import './announcement.css'

const Announcement = () => {
    return (
      <Container text style={{ padding: "20px" }}>
          <h1 style={{textAlign: 'center'}}>Announcements</h1>
        <List divided relaxed>
          <List.Item>
            <List.Icon
              name="file pdf outline"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header as="a">Important announcement</List.Header>
              <List.Description as="a">Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="file pdf outline"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header as="a">Quick Read</List.Header>
              <List.Description as="a">Updated 22 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="file pdf outline"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header as="a">Flats Updated</List.Header>
              <List.Description as="a">Updated 34 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    );
}

export default Announcement
