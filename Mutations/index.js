import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LoginUser($cellphone: String!, $password: String!){
    login(cellphone: $cellphone, password: $password) {
      ... on AuthInfo {
        token
      }
    }
  }
`;

// ClIENTS

export const CREATE_CLIENT = gql`

  mutation CreateClient($input: ClientInput!)
    { createClient(input: $input){
      ... on Client {
        id
        firstName
        lastName
        cellphone
        address
      }
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: Int!, $input: ClientInput!)
    { updateClient(id: $id, input: $input){
      ... on Client {
        id
        firstName
        lastName
        cellphone
        address
      }
    }
  }
`;
