import axios from 'axios'

import { appConfig } from '../../config/app.config'

export const api = axios.create({
  baseURL: appConfig.RN_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 8 * 1000,
  validateStatus: (status: number) => status >= 200 && status < 300,
})
