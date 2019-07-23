// const { handleChange, searchBusinessClick, searchUserClick } = require('./Components/WOS/WOS.js')
import WOS from './components/WOS/WOS.js'
describe('handleChange', () => {
   test('Facebook should be Facebook', () => {
       expect(handleChange('Facebook')).toEqual({"[e.target.name]": "Facebook"})
   });
})

describe('searchBusinessClick', () => {
   test('Senior Frontend Dev should be Senior Frontend Dev', () => {
       expect(handleJobTitle('Senior Frontend Dev')).toEqual({"payload": "Senior Frontend Dev", "type": "HANDLE_JOBTITLE"})
   });
})

describe('searchUserClick', () => {
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