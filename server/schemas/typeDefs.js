const typeDefs = `#graphql
    type Tech {
        _id: ID!
        name: String!
    }

    type Query {
        allTech: [Tech]
    }
`;

module.exports = typeDefs;
