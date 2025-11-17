// plugin-dynamic-routes/index.js
module.exports = function (context, options) {
    return {
    name: 'plugin-dynamic-routes',
    async contentLoaded({actions}) {
        const {addRoute} = actions;

        // Example dynamic route for a workflow item
        addRoute({
        path: '/cohorts/api/mentee/:slug',
        component: '@site/src/components/mentee', // Path to your React component
        // You can also pass data to the component via 'modules'
        // modules: {
        //   data: createData('workflowData.json', JSON.stringify({ /* ... */ })),
        // },
        });

        // Add other dynamic routes as needed
    },
    };
};