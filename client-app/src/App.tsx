import {useEffect, useState} from "react";
import axios from "axios";
import {Header, List} from "semantic-ui-react";

function App() {
    const [activities, setActivities] =  useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Activities')
            .then(res => setActivities(res.data));
        
    }, []);
    
    return (
      <>
          <Header as={'h2'} icon={'users'} content={'Reactivities'} />
          <List>
              {activities.map((activity: any) => (
                  <List.Item key={activity.id}>
                      {activity.title}
                  </List.Item>
              ))}
          </List>
      </>
    )
}

export default App
