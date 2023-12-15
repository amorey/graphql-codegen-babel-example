import { useQuery } from '@apollo/client';

import { graphql } from './gql/gql';

const findUserQuery = graphql(`
  query findUser($userId: ID!) {
    user(id: $userId) {
      id
      username
      role
    }
  }
`);

function App() {
  const { data } = useQuery(findUserQuery, { variables: { userId: '10' } });
  return (
    <div className="App">
      hello {data?.user?.username}
    </div>
  );
}

export default App;
