import { useEffect } from "react"

const useScrollLock = (flag: boolean): void => {
  useEffect(() => {
    const root = document.getElementById("root")

    if (root) {
      document.body.style.overflow = flag ? "hidden" : "auto"
      // root.style.scrollbarGutter = flag ? "stable" : "auto"
    }

    return () => {
      if (root) {
        document.body.style.overflow = "auto"
        //   root.style.scrollbarGutter = "auto"
      }
    }
  }, [flag])
}

export { useScrollLock }
