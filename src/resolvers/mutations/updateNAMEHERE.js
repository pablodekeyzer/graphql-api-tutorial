const { ApolloError } = require("apollo-server");

module.exports = async (_, { id, input }, { models }) => {

  try {
    const NAMEHEREToUpdate = await models.NAMEHERE.findOne({ _id: id });

    if (!NAMEHEREToUpdate) throw new ApolloError(`Could not find NAMEHERE with id: '${id}'.`, 400);

    Object.keys(input).forEach(value => {
      NAMEHEREToUpdate[value] = input[value];
    });

    const updatedNAMEHERE = await NAMEHEREToUpdate.save();

    return updatedNAMEHERE
  }
  catch (e) {
    throw new ApolloError(e)
  }
};
