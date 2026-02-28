import { useRef, useEffect } from 'react';

export function useAutoScroll(dep) {
         const containerRef = useRef(null);           // useRef = this is a hook that lets us create a reference to an HTML element, we can use this reference to access the element and its properties

        useEffect(() => {                               // useEffect = this is a hook that lets us run some code after the component has rendered, we can use this to perform side effects, such as fetching data or updating the DOM
          const containerElem = containerRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [dep]);                                    // this is the dependency array, useEffect will only run when the values in the dependency array change, in this case, it will run when chatMessages changes

        return containerRef;
      }