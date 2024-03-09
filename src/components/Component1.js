import React, { useRef, useEffect } from 'react'
import "./Compoone.css"
const Component1 = () => {
    const refBox = useRef(null)
    const refTop = useRef(null)
    const refRight = useRef(null)
    const refBottom = useRef(null)
    const refLeft = useRef(null)

    useEffect(() => {
        const resizableElement = refBox.current;
        const styles = window.getComputedStyle(resizableElement)
        let width = parseInt(styles.width, 10)
        let height = parseInt(styles.height, 10)
        let xCord = 0
        let yCord = 0

        resizableElement.style.top = "150px"
        resizableElement.style.left = "150px"


        //TOP
        const onMouseMoveTopResize = (e) => {
            const dy = e.clientY - yCord
            height = height - dy
            yCord = e.clientY
            resizableElement.style.height = `${height}px`
        }

        const onMouseUpTopResize = (e) => {
            document.removeEventListener("mousemove", onMouseMoveTopResize)
        }

        const onMouseDownTopResize = (e) => {
            yCord = e.clientY
            const styles = window.getComputedStyle(resizableElement)
            resizableElement.style.bottom = styles.bottom
            resizableElement.style.top = null
            document.addEventListener("mousemove", onMouseMoveTopResize)
            document.addEventListener("mouseup", onMouseUpTopResize)

        }


        //RIGHT
        const onMouseMoveRightResize = (e) => {
            const dx = e.clientX - xCord

            xCord = e.clientX
            width = width + dx
            resizableElement.style.width = `${width}px`
        }

        const onMouseUpRightResize = (e) => {
            document.removeEventListener("mousemove", onMouseMoveRightResize)
        }

        const onMouseDownRightResize = (e) => {
            xCord = e.clientX
            // const styles = window.getComputedStyle(resizableElement)
            resizableElement.style.left = styles.left
            resizableElement.style.right = null
            document.addEventListener("mousemove", onMouseMoveRightResize)
            document.addEventListener("mouseup", onMouseUpRightResize)

        }


        //BOTTOM
        const onMouseMoveBottomResize = (e) => {
            const dy = e.clientY - yCord


            height = height + dy
            yCord = e.clientY
            resizableElement.style.height = `${height}px`
        }

        const onMouseUpBottomResize = (e) => {
            document.removeEventListener("mousemove", onMouseMoveBottomResize)
        }

        const onMouseDownBottomResize = (e) => {
            yCord = e.clientY
            const styles = window.getComputedStyle(resizableElement)
            resizableElement.style.top = styles.top
            resizableElement.style.bottom = null
            document.addEventListener("mousemove", onMouseMoveBottomResize)
            document.addEventListener("mouseup", onMouseUpBottomResize)

        }

        //LEFT
        const onMouseMoveLeftResize = (e) => {
            const dx = e.clientX - xCord

            xCord = e.clientX
            width = width - dx
            resizableElement.style.width = `${width}px`
        }

        const onMouseUpLeftResize = (e) => {
            document.removeEventListener("mousemove", onMouseMoveLeftResize)
        }

        const onMouseDownLeftResize = (e) => {
            xCord = e.clientX
            //const styles = window.getComputedStyle(resizableElement)
            resizableElement.style.right = styles.right
            resizableElement.style.left = null
            document.addEventListener("mousemove", onMouseMoveLeftResize)
            document.addEventListener("mouseup", onMouseUpLeftResize)

        }


        //Mouse Down

        const resizerRight = refRight.current
        resizerRight.addEventListener("mousedown", onMouseDownRightResize)


        const resizerTop = refTop.current
        resizerTop.addEventListener("mousedown", onMouseDownTopResize)

        const resizerBottom = refBottom.current
        resizerBottom.addEventListener("mousedown", onMouseDownBottomResize)

        const resizerLeft = refLeft.current
        resizerLeft.addEventListener("mousedown", onMouseDownLeftResize)


        return () => {
            resizerRight.removeEventListener("mousedown", onMouseDownRightResize)
            resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize)
            resizerTop.removeEventListener("mousedown", onMouseDownTopResize)
            resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize)
        }

    }, [])
    return (
        <>

            <div className='wrapper'>
                <div ref={refBox} className='resizeable-box'>
                    <div ref={refLeft} className='resizer rl'></div>
                    <div ref={refTop} className='resizer rt'></div>
                    <div ref={refRight} className='resizer rr'></div>
                    <div ref={refBottom} className='resizer rb'></div>
                </div>
            </div>
        </>
    )
}

export default Component1
