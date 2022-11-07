import {useEffect} from 'react';
import Router from 'next/router';

import Nav from '../../components/nav';

import useUser from '../../data/use-user';
import {login} from '../../libs/auth';

export default function App() {
  const {user, mutate, loggedOut} = useUser();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    console.log('user && !loggedOut', user, !loggedOut);

    if (user && !loggedOut) {
      Router.replace('/auth/dashboard');
    }
  }, [user, loggedOut]);

  return (
    <div className='homepage'>
      <Nav title='ACME' />
      <main>
        <h1>Click that button to login to someone account</h1>
        <br />
        <button
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            login();
            mutate(); // after logging in, we revalidate the SWR
          }}>
          Login To Continue
        </button>
      </main>
    </div>
  );
}
