# Getting Started

### Define input

The input is read from `./input.txt` and the output post-processing is written to `./output.txt`.

### Install dependencies

```
yarn
```

or

```
npm install
```

## Run as TypeScript

```
yarn start-ts
```

or

```
npm run start-ts
```

## Build and run as JavaScript

```
yarn build
yarn start
```

or

```
npm run build
npm run start
```

## Test

```
yarn test
```

or

you get the idea...

## Linting

```
yarn lint
```

# Project structure

This project makes use of TypeScript, TypeScript (.ts) files live in the `src` folder and after being built are output as JavaScript (.js) in the `dist` folder.

```
├── dist
├── src
│   ├── __mocks__
│   ├── input
│   ├── validate
│   ├── process
│   ├── navigate
│   ├── move
│   ├── output
│   └── main.js
├── package.json
├── input.txt
├── jest.config.js
├── tsconfig.json
└── tslint.json
```

I'll try and highlight the interesting stuff here:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from the TypeScript build                              |
| **src**                  | Contains source code that will be compiled to the dist dir                                    |
| **src/__mocks__**        | Jest manual mocks, currently only using this for a mock for Node `fs`                         |
| **src/input**            | Split into read and parse: read recieves the input from a source (file I/O in this instance) and parses the provided input. This also calls to validate                                                                     |
| **src/validate**         | Provides basic validators for the format/values of the input provided                         |
| **src/process**          | Accepts the parsed input, sequentially handling each robot provided, calling to navigate      |
| **src/navigate**         | Handles a single robot at a time and applies the instructions, calling to move for these operations                                                                                                                 |
| **src/move**             | Applies simple transformations to the robot object based on the instruction                   |
| **src/output**           | Again, split into parse and write: parse to convert the robot objects into a string-readable format and write to return the output (again, file I/O in this instance)                                                   |
| input.tsx                | Instructions file with program input (important!!)                                            |
| jest.config.js           | Used to configure Jest                                                                        |
| package.json             | File that contains npm dependencies as well as build scripts                                  |
| tsconfig.json            | Config settings for compiling code written in TypeScript                                      |
| tslint.json              | Config settings for TSLint code style checking                                                |

Within the project you'll find `.test` and `.interfaces` files grouped with their related code files.

# Problem: Martian Robots

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).

A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the instructions:

* Left : the robot turns left 90 degrees and remains on the current grid point.
* Right : the robot turns right 90 degrees and remains on the current grid point.
* Forward : the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).

There is also a possibility that additional command types may be required in the future and provision should be made for this.

Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move “off” the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.

### The Input
The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.

The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a string of the letters “L”, “R”, and “F” on one line.

Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution.

The maximum value for any coordinate is 50.

All instruction strings will be less than 100 characters in length.

##### Sample Input

```
53
11E RFRFRFRF
32N FRRFLLFFRRFLL
03W LLFFFLFLFL
```

### The Output

For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST” should be printed after the position and orientation.

##### Sample Output

```
11E
33NLOST
23S
```