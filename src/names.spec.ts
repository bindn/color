import { Names } from './names';

describe('Name Class', ()=> {
  describe('List', ()=> {
    test('When list is called color names are returned', ()=>{
      const actual = Names.list().default;
      expect(actual.length).toBeGreaterThanOrEqual(1);
      expect(actual[0].value).not.toBe('');
      expect(actual[0].hex).not.toBe('');
    })
  })

  describe('Search',()=>{
    test('When searching for a valid name then a Name is returned',()=>{
      const actual = Names.list().search('Black');
      expect(actual[0].value).toBe('Black');
    })
  })

})