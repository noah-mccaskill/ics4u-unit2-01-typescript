/**
 * This class creates an integer stack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-08
 */

class NoahStack {
  stackAsList: number[] = []

  Push(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  StackArray(): void {
    console.log(this.stackAsList)
  }
}

export = NoahStack
