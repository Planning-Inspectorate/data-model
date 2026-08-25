import { prettierConfig } from '@planning-inspectorate/coding-standards';

export default {
	...prettierConfig,
	overrides: [
		{
			files: '*.json',
			options: {
				useTabs: false
			}
		}
	]
};
