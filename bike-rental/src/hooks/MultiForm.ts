import React, { ReactElement, useState } from 'react'

export function MultiForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() { 
    setCurrentStepIndex(() => {
      if (currentStepIndex < steps.length - 1) {
        return currentStepIndex + 1
      }
      return currentStepIndex
    })
  }

  function back() {
    setCurrentStepIndex(() => {
      if (currentStepIndex > 0) {
        return currentStepIndex - 1
      }
      return currentStepIndex
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index + 1)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    goTo,

  }
}