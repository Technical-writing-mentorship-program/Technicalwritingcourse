// plugin-dynamic-routes/index.js
module.exports = function (context, options) {
    return {
    name: 'plugin-dynamic-routes',
    async contentLoaded({actions}) {
        const {addRoute} = actions;

        // Example dynamic route for a workflow item
        addRoute({
        path: '/cohorts/mentee/:slug',
        component: '@site/src/components/mentee', // Path to your React component
        });

        addRoute({
        path: '/cohorts/api/:year',
        component: '@site/src/components/apiCohortList', // Path to your React component
        });

        // Add other dynamic routes as needed
    },
    };
};