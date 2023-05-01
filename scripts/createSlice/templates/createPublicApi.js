const fs = require('fs/promises');

const firstCharUpperCase = require('../firstCharUpperCase');
const resolveRoot = require('../resolveRoot');


module.exports = async (layer, sliceName) => {
	const componentName = firstCharUpperCase(sliceName);
	const schemaName = `${sliceName}Schema`;

	try {
		await fs.writeFile(
			resolveRoot('src', layer, sliceName, 'sort.ts'),
			`export { ${componentName} } from './ui/${componentName}/${componentName}';
export type { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`,
		);
	} catch (e) {
		console.log('Не удалось создать PUBLIC API');
	}
};
