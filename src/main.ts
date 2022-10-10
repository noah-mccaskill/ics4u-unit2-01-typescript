/**
 * The program uses the NoahStack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-08
 */

import NoahStack from './noahStack'
import promptSync from 'prompt-sync'

// this function uses the NoahStack
const prompt = promptSync()
const stackNumber = new NoahStack()

const userInput = Number(prompt('Enter a number: '))
stackNumber.Push(userInput)

stackNumber.StackArray()

console.log('\nDone.')
