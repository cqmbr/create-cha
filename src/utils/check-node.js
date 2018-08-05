import { error } from './logger'
import pkg from '../../package.json'

/**
 * check node version
 */
export default () => {
  const nodeVersion = process.versions.node
  const major = nodeVersion.split('.')[0]

  if (major < 8) {
    error(`You are running ${pkg.name} on Node ${nodeVersion}, need Node 8 or higher`)
    process.exit(1)
  }
}
