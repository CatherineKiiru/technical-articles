# Understanding the Mentorlst Calendar Component

This project uses the date-fns library to implement a responsive calendar that users can select dates in a month. Users can also toggle between different months.

## Intro to the date-fns Library
Date-fns is a library that implements a date system which you can customize, and manipulate in a browser. It contains more than 200 functions for customizing your date system. Date-fns uses currying (just like lodash) and contains submodules that apply functional programming variations to it's functions.

## The Initial Scaffold

- You start by importing the submodules that we'll call in our functions later

- Import useState from React

- define the JSX scaffold that will contain the functions & styling. 

- Within the Calendar function, initialize a variable and assign it to the startOfToday submodule with an empty parameter

- define a "days" array with the number of days in a calendar

- define the array of columns we'll use to structure a month

## UseState
- We want to define the UseState hook that will set a currentMonth variable, and a setCurrentMonth setter function. 
- Then we'll set the initial value to the current and year by formatting it as a string through the format function that's been provided by the date fns library 



This code uses React's useState hook to create a state variable called currentMonth and a corresponding function called setCurrentMonth. The initial value of currentMonth is set to the current month and year, formatted as a string using the format function from a date library (presumably date-fns or something similar). The useState function takes a function as an argument which ensures that the format function is only called once, when the component first mounts.

Next, the code uses the parse function from the same date library to convert the currentMonth string back into a JavaScript Date object representing the first day of the month. This Date object is assigned to the firstDayOfMonth variable.

Overall, this code sets up a way to track the current month in a React component and provides a Date object representing the first day of the month, which could be useful for a calendar or date picker interface.
