import { datadogRum } from '@datadog/browser-rum'
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client'
import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const {
    REACT_APP_APPLICATION_ID,
    REACT_APP_CLIENT_TOKEN,
    REACT_APP_ENV,
    REACT_APP_GRAPHQL_SERVER,
    REACT_APP_SERVICE,
    REACT_APP_SITE,
    REACT_APP_VERSION,
} = process.env

datadogRum.init({
    applicationId: REACT_APP_APPLICATION_ID as string,
    clientToken: REACT_APP_CLIENT_TOKEN as string,
    site: REACT_APP_SITE as string,
    service: REACT_APP_SERVICE as string,
    env: REACT_APP_ENV as string,
    // Specify a version number to identify the deployed version of your application in Datadog 
    version: REACT_APP_VERSION as string,
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input',
    allowedTracingOrigins: ["http://localhost:3000", "http://localhost:4000"]
});
    
datadogRum.startSessionReplayRecording()

const httpLink = createHttpLink({
    uri: REACT_APP_GRAPHQL_SERVER as string
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
