import { glados, notify } from './main.js'

if (!process.env.GLADOS?.trim()) {
  console.error('Missing GLADOS. Set it to the GLaDOS Cookie before running this test.')
  console.error('PowerShell example: $env:GLADOS = "user_id=...; session=..."')
  process.exitCode = 1
} else {
  process.env.NOTIFY = 'console:log'

  try {
    await notify(await glados())
  } catch (error) {
    console.error('Local checkin test failed:', error)
    process.exitCode = 1
  }
}
