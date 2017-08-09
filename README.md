Object to Formdata
==========================
An easy way to convert nest javascript object to formdata. This package was folk from https://goo.gl/TYVdLF, thanks to https://gist.github.com/ghinda
## installation ##
via npm : 

    npm install obj2fd --save
via yarn :

    yarn add obj2fd 


## Using ##
es5 :

    var obj2fd = require('obj2fd/es5').default;
    var object = {a:1, b:2, c:[{a:1,b2},{c:3, d:4}]};
	var formdata = obj2fd(object)
	
es6 : 

    import obj2fd from 'obj2fd'
    let object = {a:1, b:2, c:[{a:1, b2}, {c:3, d:4}]}
    formdata = obj2fd(object)


By default import like above  0 (zero), undefined, false, "", null, and NaN will still show as formdata object. if you don't need to include them just require Truthy  version.

#### Truthy version ####
In JavaScript, a truthy value is a value that is considered  true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN). Ref: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

es5 : 

    var obj2fd = require('obj2fd/es5').Truthy;
    var object = {a:0,b:undefined,c:[{a:false, b: NaN},{c:3, d:0}]};
	var formdata = obj2fd(object)
	
es6 : 

    import { Truthy as obj2fd } from 'obj2fd'
    let object = {a:0,b:undefined,c:[{a:false, b: NaN}, {c:3, d:0}]}
    formdata = obj2fd(object)
result : 

    result : c[0] = [c => 3]

## License ##
MIT license
https://spdx.org/licenses/MIT.html