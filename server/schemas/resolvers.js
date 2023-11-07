const { Tech } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    allTech: async () => {
      return Tech.find({});
    },
  },
};

module.exports = resolvers;
