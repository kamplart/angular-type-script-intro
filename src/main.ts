import './style.css'
//import './topics/01-basic-types'
//import './topics/02-object-interface'
//import './topics/03-functions'
//import './topics/04-homework'
//import './topics/05-basic-destructor'
//import './topics/06-function-destructuring'
//import './topics/07-import-export'
//import './topics/08-clases'
//import './topics/09-generics'
//import './topics/10-decorators'
import './topics/11-optional-chaining'

import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'


import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div>bola mundo 
  </div>
`

//console.log('bola mundo:'+name);
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
