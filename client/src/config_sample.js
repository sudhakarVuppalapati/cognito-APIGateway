export default {
	apiGateway: {
		REGION: 'us-west-1',
		URL: 'https://wz2sdbtt54.execute-api.us-west-1.amazonaws.com/dev/'
	},
	cognito: {
		REGION: 'us-west-1',
		USER_POOL_ID: 'us-west-1_7T6ej5aig',
		APP_CLIENT_ID: '7t7a04dvc3ag6eiuj2jqj7ndu2',
		DOMAIN: 'https://wz2sdbtt54.auth.us-west-1.amazoncognito.com',
		SCOPE: ['email', 'openid'],
		REDIRECT_SIGN_IN: 'YOUR_URL_FOR_SIGN_IN',
		REDIRECT_SIGN_OUT: 'YOUR_URL_FOR_SIGN_IN',
		RESPONSE_TYPE: 'code'
	}
};
