import { appConfig } from './app.config'

describe('App Config', () => {
  describe('Test RN_APP_ENV', () => {
    it('should test enviroment', () => {
      expect(appConfig.RN_APP_ENV).toEqual('development')
    })
  })
})
