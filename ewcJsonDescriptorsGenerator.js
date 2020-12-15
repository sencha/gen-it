
fs = require('fs');
var path = require('path');

const generateJSONDescriptorForElement = (doxiObj) => {
	const widget = {
		"name": doxiObj.name,
		"selector": doxiObj.name.replace('.', '-').toLowerCase(),
		"description": doxiObj.text
	}

	//Create Properties
	const properties = [];
	const events = [];
	const methods = [];
	let superClass = [];

	let uniquePropertiesMap = {};
	let mixins = [];
	if (doxiObj.extends) {
		superClass = doxiObj.extends.split(',');
	}
	if (doxiObj.mixed) {
		mixins = doxiObj.mixed.split(',');
	}
	if (doxiObj.items) {
		const doxiPropertiesItems = doxiObj.items.filter(item => item[`$type`] == 'properties');
		if (doxiPropertiesItems.length > 0) {
			const doxiProperties = doxiPropertiesItems[0].items;

			doxiProperties.forEach(doxiProp => {
				if (!uniquePropertiesMap.hasOwnProperty(doxiProp.name)) {
					uniquePropertiesMap[doxiProp.name] = 1;
					properties.push({
						"name": doxiProp.name,
						"privacy": doxiProp.access,
						"type": doxiProp.type ? doxiProp.type.toLowerCase() : '',
						"value": doxiProp.value,
						"allowedValues": [],
						"description": doxiProp.text,
						"demoValues": []
					})
				}
			})
		}


		//Using Configs
		const doxiConfigItems = doxiObj.items.filter(item => item[`$type`] == 'configs');
		if (doxiConfigItems.length > 0) {
			const doxiProperties = doxiConfigItems[0].items.filter(x => x[`$type`] == "property");

			doxiProperties.forEach(doxiProp => {
				if (!uniquePropertiesMap.hasOwnProperty(doxiProp.name)) {
					uniquePropertiesMap[doxiProp.name] = 1;
					properties.push({
						"name": doxiProp.name,
						"privacy": doxiProp.access,
						"type": doxiProp.type ? doxiProp.type.toLowerCase() : '',
						"value": doxiProp.value,
						"allowedValues": [],
						"description": doxiProp.text,
						"demoValues": []
					})
				}
			})

		}

		uniquePropertiesMap = {};
		//Create Events

		const doxiEventsItems = doxiObj.items.filter(item => item[`$type`] == 'events');
		if (doxiEventsItems.length > 0) {
			const doxiEvents = doxiEventsItems[0].items;

			doxiEvents.forEach(doxiEvent => {
				if (!uniquePropertiesMap.hasOwnProperty(doxiEvent.name)) {
					uniquePropertiesMap[doxiEvent.name] = 1;
					const event = {
						"name": doxiEvent.name,
						"description": doxiEvent.text,
						"demo": "events"
					}
					if (doxiEvent.items && doxiEvent.items.length > 0) {
						event.detail = [];
						doxiEvent.items.forEach(doxiEventParam => {
							event.detail.push({
								"name": doxiEventParam.name,
								"description": doxiEventParam.text
							})
						})
					}

					events.push(event);
				}

			})
		}

		uniquePropertiesMap = {};
		//create Methods

		const doxiMethodsItems = doxiObj.items.filter(item => item[`$type`] == 'methods');
		if (doxiMethodsItems.length > 0) {
			const doxiMethods = doxiMethodsItems[0].items;

			doxiMethods.forEach(doxiMethod => {
				if (!uniquePropertiesMap.hasOwnProperty(doxiMethod.name)) {
					uniquePropertiesMap[doxiMethod.name] = 1;
					const method = {
						"name": doxiMethod.name,
						"description": doxiMethod.text ? doxiMethod.name : "",
						"demoValues": [],
						"returnDataType": null,
						"demo": "methods"
					}

					if (doxiMethod.items && doxiMethod.items.length > 0) {
						method.arguments = [];
						const returnArgument = doxiMethod.items.filter(x => x['$type'] == 'return');
						const params = doxiMethod.items.filter(x => x['$type'] != 'return');
						if (returnArgument.length > 0) {
							method.returnDataType = returnArgument[0].type;
						}
						params.forEach(param => {
							method.arguments.push({
								"name": param.name,
								"type": param.type ? param.type : "",
								"description": param.text ? param.text : "",
								"optional": false
							})
						})
					}

					methods.push(method);
				}

			})
		}
	}

	const jsonDescriptor = { superClass, mixins, widget, properties, events, methods };
	//console.log(jsonDescriptor)
	return jsonDescriptor;

}

const generateDescriptors = async (fileNameToProcess, outputFolder) => {
	fs.readFile(fileNameToProcess, 'utf8', function (err, doxi) {
		if (err) {
			throw err;
		}
		const doxiJSON = doxi.toString();
		const allElements = JSON.parse(doxiJSON);
		const allDoxiElements = allElements.global.items.filter(x => x[`$type`] == 'class');
		allDoxiElements.forEach(doxiObj => {
			const json = generateJSONDescriptorForElement(doxiObj);
			fs.writeFile(__dirname + `/${outputFolder}/${json.widget.name}.json`, JSON.stringify(json, null, 4), function (err, result) {
				if (err) console.log('error', err);
			});
		})
	})
}

const main = () => {
	const extTheme = process.argv[2];
	if (!extTheme) {
		return console.error('Specify theme(modern or classic) as third argument.');
	}
	const outputFolder = `EWC_${extTheme}_Json_Descriptors`;
	var outputDirPath = path.join(__dirname, outputFolder);

	if (!fs.existsSync(outputDirPath)) {
		fs.mkdirSync(outputDirPath);
	}
	const doxiPath = extTheme === 'classic' ? path.join(__dirname, 'AllClassesFiles', 'docs', 'classic', 'classic-all-classes-flatten.json') : path.join(__dirname, 'AllClassesFiles', 'docs', 'modern', 'modern-all-classes-flatten.json');
	generateDescriptors(doxiPath, outputFolder).then(() => {
		console.log('Job Completed.');
	}).catch(e => {
		console.error(e);
	});
}

main();