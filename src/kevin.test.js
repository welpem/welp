const { handleCompany, handleJobTitle, handleAddress, handleCity, handleState } = require('./redux/jobReducer')

describe('handleCompany', () => {
   test('Facebook should be Facebook', () => {
       expect(handleCompany('Facebook')).toEqual({"payload": "Facebook", "type": "HANDLE_COMPANY"})
   });
})

describe('handleJobTitle', () => {
   test('Senior Frontend Dev should be Senior Frontend Dev', () => {
       expect(handleJobTitle('Senior Frontend Dev')).toEqual({"payload": "Senior Frontend Dev", "type": "HANDLE_JOBTITLE"})
   });
})

describe('handleAddress', () => {
   test('123 Main St. should be 123 Main St.', () => {
       expect(handleAddress('123 Main St.')).toEqual({"payload": "123 Main St.", "type": "HANDLE_ADDRESS"})
   });
})

describe('handleCity', () => {
   test('Austin should be Austin', () => {
       expect(handleCity('Austin')).toEqual({"payload": "Austin", "type": "HANDLE_CITY"})
   });
})

describe('handleState', () => {
   test('TX should be TX', () => {
       expect(handleState('TX')).toEqual({"payload": "TX", "type": "HANDLE_STATE"})
   });
})