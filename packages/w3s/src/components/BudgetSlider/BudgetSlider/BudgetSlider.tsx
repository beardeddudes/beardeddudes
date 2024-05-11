import { FC, useEffect, useRef, useState } from "react"
import "./BudgetSlider.scss"

const BudgetSlider: FC = () => {
  const minLimit = 1
  const maxLimit = 50

  const [minVal, setMinVal] = useState(minLimit)
  const [maxVal, setMaxVal] = useState(maxLimit)

  const leftRangeRef = useRef<HTMLInputElement>(null)
  const rightRangeRef = useRef<HTMLInputElement>(null)

  const thumbLeftRef = useRef<HTMLDivElement>(null)
  const thumbRightRef = useRef<HTMLDivElement>(null)

  const rangeRef = useRef<HTMLDivElement>(null)

  const setLeftRange = () => {
    if (leftRangeRef.current && rightRangeRef.current && thumbLeftRef.current && rangeRef.current) {
      const minValue = Math.min(parseInt(leftRangeRef.current.value), parseInt(rightRangeRef.current.value) - 1)

      const percent = Math.round(
        ((minValue - parseInt(leftRangeRef.current.min)) /
          (parseInt(leftRangeRef.current.max) - parseInt(leftRangeRef.current.min))) *
          100
      )

      thumbLeftRef.current.style.left = `${percent}%`
      rangeRef.current.style.left = `${percent}%`
    }
  }

  useEffect(() => {
    if (leftRangeRef.current) {
      setLeftRange()
      leftRangeRef.current.addEventListener("input", setLeftRange)
    }
    return () => {
      if (leftRangeRef.current) {
        leftRangeRef.current.removeEventListener("input", setLeftRange)
      }
    }
  }, [])

  const setRightRange = () => {
    if (rightRangeRef.current && thumbRightRef.current && rangeRef.current && leftRangeRef.current) {
      const maxValue = Math.max(parseInt(rightRangeRef.current.value), parseInt(leftRangeRef.current.value) + 1)

      const percent = Math.round(
        ((maxValue - parseInt(rightRangeRef.current.min)) /
          (parseInt(rightRangeRef.current.max) - parseInt(rightRangeRef.current.min))) *
          100
      )

      thumbRightRef.current.style.right = `${100 - percent}%`
      rangeRef.current.style.right = `${100 - percent}%`
    }
  }

  useEffect(() => {
    if (rightRangeRef.current) {
      setRightRange()
      rightRangeRef.current.addEventListener("input", setRightRange)
    }
    return () => {
      if (rightRangeRef.current) {
        rightRangeRef.current.removeEventListener("input", setRightRange)
      }
    }
  }, [])

  return (
    <div className={"budget-slider__container"}>
      <div className={"budget-slider__min-limit-budget"}>$ {minLimit}k</div>
      <div className={"budget-slider__wrapper"}>
        <input
          type={"range"}
          min={minLimit}
          max={maxLimit}
          ref={leftRangeRef}
          value={minVal}
          onChange={event => {
            const value = Math.min(+event.target.value, maxVal - 1)
            setMinVal(value)
          }}
        />
        <input
          type={"range"}
          min={minLimit}
          max={maxLimit}
          ref={rightRangeRef}
          value={maxVal}
          onChange={event => {
            const value = Math.max(+event.target.value, minVal + 1)
            setMaxVal(value)
          }}
        />
        <div className={"budget-slider__double-slider"}>
          <div className={"budget-slider__track"}> </div>
          <div className={"budget-slider__range"} ref={rangeRef}>
            <div className={"budget-slider__values"}>
              <div className={"budget-slider__left-value"}>$ {minVal}k</div>
              <span>-</span>
              <div className={"budget-slider__right-value"}>$ {maxVal}k</div>
            </div>
          </div>
          <div className={"budget-slider__thumb budget-slider__thumb--left"} ref={thumbLeftRef}></div>
          <div className={"budget-slider__thumb budget-slider__thumb--right"} ref={thumbRightRef}></div>
        </div>
      </div>
      <div className={"budget-slider__max-limit-budget"}>$ {maxLimit}k</div>
    </div>
  )
}

export default BudgetSlider
