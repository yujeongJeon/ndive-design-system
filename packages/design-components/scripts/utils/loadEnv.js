import * as dotenv from 'dotenv'

import {normalize} from './normalize.js'

dotenv.config({path: normalize(import.meta.dirname, '../../.env')})
