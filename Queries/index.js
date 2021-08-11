import { gql } from '@apollo/client';

// CLIENTS
export const GET_CLIENTS = gql`
  query GetClients($page: Int, $term: String, $perPage: Int) {
    clientsSearch(page: $page, term: $term, perPage: $perPage) {
      results {
        ...clientFields
      }
    }
  }

  fragment clientFields on Client {
    id
    firstName
    lastName
    cellphone
    address
  }
`;






