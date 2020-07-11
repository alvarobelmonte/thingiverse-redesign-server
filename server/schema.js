const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    newest: [Thing]!
    popular: [Thing]!
    featured: [Thing]!
    thing(id: ID!): Thing
  }

  type Thing {
    id: ID
    name: String
    thumbnail: String
    url: String
    creator: Creator
    details: String
    license: String
    download_count: Int
    view_count: Int
    like_count: Int
    default_image: Image
  }

  type Creator {
    id: ID
    name: String
    public_url: String
    thumbnail: String
  }

  type Image {
    id: ID
    url: String
    name: String
    sizes: [ImageSize]
  }

  type ImageSize {
    type: String
    size: String
    url: String
  }
`;

module.exports = typeDefs;