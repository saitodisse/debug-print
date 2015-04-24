# debug-print

#### install

```sh
npm i debug-print
```

#### usage

```js
TODO
```

### ENVS

- **DEBUG**
 - enable debug and debug-print. Se more details on debug README (https://github.com/visionmedia/debug#wildcards)


- **DEBUG_SUBJECT_RIGHT**
 - size o "subject", default === 50, to show or cut


- **DEBUG_STYLE**
 - 1 | small: one line only
 - 2 | detail: will show arguments and function return statement


- **DEPTH**



### examples

##### small, right = 20

```sh
$ DEBUG=* DEBUG_STYLE=1 DEBUG_SUBJECT_RIGHT=20 node _sandbox/file1.js

../_sandbox/file1.js     sum(7) +0ms
..ox/folder/file2.js     sum_inner(2) +3ms
../_sandbox/file1.js     times(11) +202ms
..ox/folder/file2.js     sum_inner(2) +0ms
total: 12

```

##### detail, right = 50

```sh
$ DEBUG=* DEBUG_STYLE=2 DEBUG_SUBJECT_RIGHT=50 node _sandbox/file1.js

..ome/julio/_git/ast/debug-print/_sandbox/file1.js
  7 | sum (1, 1)
    |   returned: 2
    |   time elapsed: +0ms
..io/_git/ast/debug-print/_sandbox/folder/file2.js
  2 | sum_inner (-4, 6)
    |   returned: 2
    |   time elapsed: +3ms
..ome/julio/_git/ast/debug-print/_sandbox/file1.js
  11 | times ({ a: 2, b: 3 })
    |   returned: { result: 6 }
    |   time elapsed: +204ms
..io/_git/ast/debug-print/_sandbox/folder/file2.js
  2 | sum_inner (0, 2)
    |   returned: 2
    |   time elapsed: +0ms

```


#### test

```sh
# install nodemon
npm i nodemon -g

# see result
DEBUG=* nodemon _sandbox/file1.js
```

## links

- node syntax highlight: https://github.com/babel/babel/blob/088846a3479375a51d71084cb4fd70ef8fa21d29/src/babel/helpers/code-frame.js
