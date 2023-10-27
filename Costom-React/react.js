// function costomRender(reactElement, container) {
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('herf', reactElement.props.herf)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

//    const domElement =  document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children
//    for(const prop in reactElement.props){
//         if(prop === 'children') continue;
//         domElement.setAttribute(prop,reactElement.props[prop])
//    }
//    container.appendChild(domElement)
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const mainContainer = document.querySelector('#root');

// costomRender(reactElement, mainContainer);



// function isPowerOfTwo(n) {
//     if(n <= 0 || Number.isInteger(n)){
//         return false;
//     }else{
//         return true;
    
//      // Check if n is a power of two
//     return (n & (n - 1)) === 0;
//     }
// }

// //Example :-
// console.log(isPowerOfTwo(6)); // Output: true
// console.log(isPowerOfTwo(5));  // Output: false