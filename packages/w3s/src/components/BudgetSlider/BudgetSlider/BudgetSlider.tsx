import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import "./BudgetSlider.scss"

const BudgetSlider: FC = () => {

  const minLimit = 1000
  const maxLimit = 50000

  const [minVal, setMinVal] = useState(minLimit)
  const [maxVal, setMaxVal] = useState(maxLimit)

  const leftRangeRef = useRef<HTMLInputElement>(null)
  const rightRangeRef = useRef<HTMLInputElement>(null)

  const thumbLeftRef = useRef<HTMLDivElement>(null)
  const thumbRightRef = useRef<HTMLDivElement>(null)

  const rangeRef = useRef<HTMLDivElement>(null)
  console.log(minVal, "minVal");
  console.log(maxVal, "maxVal");


  const setLeftRange = () => {
    if (leftRangeRef.current && rightRangeRef.current && thumbLeftRef.current && rangeRef.current) {
      const minValue = Math.min(
        parseInt(leftRangeRef.current.value),
        parseInt(rightRangeRef.current.value) - 1
      );
  
      const percent = Math.round(
        ((minValue - parseInt(leftRangeRef.current.min)) /
          (parseInt(leftRangeRef.current.max) - parseInt(leftRangeRef.current.min))) *
          100
      );
  
      setMinVal(minValue);
      thumbLeftRef.current.style.left = `${percent}%`;
      rangeRef.current.style.left = `${percent}%`;
    }
  };


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
      const maxValue = Math.max(
        parseInt(rightRangeRef.current.value),
        parseInt(leftRangeRef.current.value) + 1
      )

      const percent = Math.round(
        ((maxValue - parseInt(rightRangeRef.current.min)) /
          (parseInt(rightRangeRef.current.max) - parseInt(rightRangeRef.current.min))) *
          100
      )

      setMaxVal(maxValue)
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
    <div className='budget-slider__container'>
      <div className='budget-slider__min-limit-budget'>$ {Math.round(minLimit / 1000)}k</div>
      <div className='budget-slider__wrapper'>
        {/* <div> */}
          <input type='range' min={minLimit}  max={maxLimit} ref={leftRangeRef} value={minVal}/>
          <input type='range' min={minLimit} max={maxLimit}  ref={rightRangeRef} value={maxVal}
          />
          <div className='budget-slider__double-slider'>
            <div className='budget-slider__track'> </div>
            <div className='budget-slider__range' ref={rangeRef}>
              <div className='budget-slider__values'>
                <div className='budget-slider__left-value'>$ {Math.round(minVal / 1000)}k</div>
                <span>-</span>
                <div className='budget-slider__right-value'>$ {Math.round(maxVal / 1000)}k</div>
              </div>
            </div>
            <div className='budget-slider__thumb budget-slider__thumb--left' ref={thumbLeftRef}></div>
            <div className='budget-slider__thumb budget-slider__thumb--right' ref={thumbRightRef}></div>
          </div>
        {/* </div> */}
      </div>
      <div className='budget-slider__max-limit-budget'>$ {Math.round(maxLimit / 1000)}k</div>
    </div>
    )
  }

  export default BudgetSlider



//     const [minVal, setMinVal] = useState(min)
//     const [maxVal, setMaxVal] = useState(max)

//     const minValRef = useRef(null)
//     const maxValRef = useRef(null)

//     const thumbMinValueRef = useRef<HTMLDivElement>(null)
//     const thumbMaxValueRef = useRef<HTMLDivElement>(null)

//     const rangeRef = useRef<HTMLDivElement>(null)

//     // Convert to percentage
//       const getPercent = useCallback((value: number) => ((value - min) / (max - min)) * 100, [min, max])

//     // Set width of the range to decrease from the left side

//     // const leftRange = minValRef.current

//     // const rightRange = maxValRef.current

//     const range = rangeRef.current

 
//     useEffect(() => {
//       if (maxValRef.current) {
//         const minPercent = getPercent(minVal)
//         const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number
          
//         if (range && range.current && thumbMinValueRef && thumbMinValueRef.current) {
//           thumbMinValueRef.current.style.left = `${minPercent}%`
//           range.current.style.left = `${minPercent}%`
//         }
//       }
//     }, [minVal, getPercent, range])


    

//     // Set width of the range to decrease from the right side
//     useEffect(() => {
//       if (minValRef.current) {
//         // const minPercent = getPercent(+minValRef.current.value)
//         const maxPercent = getPercent(maxVal)

//         thumbMaxValueRef.current.style.right = `${100 - maxPercent}%`
//         if (range && range.current) {
//           range.current.style.right = `${100 - maxPercent}%`
//         }
//       }
//     }, [maxVal, getPercent])

//   // Get min and max values when their state changes
//     // useEffect(() => {
//     //   onChange(minVal, maxVal)
//     // }, [minVal, maxVal, onChange])

//     return (
//      <div className='budget-slider__container'>
//        <div className='budget-slider__min-limit-budget'>$ {Math.round(min / 1000)}k</div>
//        <div className='budget-slider__wrapper'>
//          <input
//            type='range'
//            min={min}
//            max={max}
//            ref={minValRef}
//            value={minVal}
//            onChange={event => {
//              const value = Math.min(+event.target.value, maxVal - 1)
//              setMinVal(value)
//              event.target.value = value.toString()
//            }}
//            className={`input-thumb input-thumb--zindex-3 ${minVal > max - 100 ? "input-thumb--zindex-5" : ""}`}
//          />
//          <input
//            type='range'
//            min={min}
//            max={max}
//            ref={maxValRef}
//            value={maxVal}
//            onChange={event => {
//              const value = Math.max(+event.target.value, minVal + 1)
//              setMaxVal(value)
//              event.target.value = value.toString()
//            }}
//            className='input-thumb input-thumb--zindex-4'
//          />

//          <div className='budget-slider__body'>
//             <div className='budget-slider__track' />
//             <div ref={rangeRef} className='budget-slider__range'>
//              <div className='budget-slider__values'>
//                <div className='budget-slider__left-value'>$ {Math.round(minVal / 1000)}k</div>
//                <span>-</span>
//                <div className='budget-slider__right-value'>$ {Math.round(maxVal / 1000)}k</div>
//              </div>
//             </div>
//             <div className='budget-slider__thumb budget-slider__thumb-left' ref={thumbMinValueRef}/>
//             <div className='budget-slider__thumb budget-slider__thumb-right' ref={thumbMaxValueRef}/>
//          </div>
//        </div>
//        <div className='budget-slider__max-limit-budget'>$ {Math.round(max / 1000)}k</div>
//      </div>
//   )
// }

// export default BudgetSlider
