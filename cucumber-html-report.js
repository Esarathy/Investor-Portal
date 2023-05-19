
const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            // {label: 'Project', value: 'Investor-portal'},
            // {label: 'Release', value: '1.2.3'},
            // {label: 'Cycle', value: 'B11221.34321'},
            // {label: 'Execution Start Time', value: 'Jan 18th 2023, 02:31 PM EST'},
            // {label: 'Execution End Time', value: 'Jan 18th 2023, 02:56 PM EST'}
        ]
    }
});