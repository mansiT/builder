import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BuilderComponent } from '@builder.io/react';
import { ClipLoader } from 'react-spinners';

const API_KEY = '4ca7d329db974aba92b7340c4269ddfe';

function App() {
  return (
   <Router>
      <Route render={({ location }) => <CatchallPage key={location.key} />} />
    </Router>
  );
}

class CatchallPage extends React.Component {
  state = { notFound: false };

  render() {
    return !this.state.notFound ? (
      <BuilderComponent
        apiKey={API_KEY}
        model="page"
        contentLoaded={content => {
          if (!content) {
            this.setState({ notFound: true });
          }
        }}
      >
        <div style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <ClipLoader color="#4a4e53" size={70} />
        </div>
      </BuilderComponent>
    ) : (
      <NotFound />
    );
  }
}

const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;

export default App;
