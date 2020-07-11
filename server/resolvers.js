module.exports = {
    Query: {
        newest: (_, __, { dataSources }) => dataSources.ThingiverseAPI.getNewestThings(),
        popular: (_, __, { dataSources }) => dataSources.ThingiverseAPI.getPopularThings(),
        featured: (_, __, { dataSources }) => dataSources.ThingiverseAPI.getFeaturedThings(),
        thing: (_, {id}, { dataSources }) => dataSources.ThingiverseAPI.getThing({id})
    }
};