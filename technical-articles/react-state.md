## Complete guide to React UseState by building a dynamic date component

In React, state is the data or properties that we need to track and manipulate in order to create dynamic features for an application.

UseState is a hook that allows you to pass state (data or properties) into functional components.

PS: A functional component is simply a JavaScript function that accepts data as a property (or prop) as it's argument and returns a React element (JSX). 

Remember, you can only call a a hook at the top level of your component. This means that you cannot call a useState hook in conditional renders or loops; you'd have to extract a new component from the initial state, and move the state into it. 

In our example below, we will build a reusable and dynamic component that lets a user select a date, and also select a range of dates.

``` JavaScript
 const [currentMonth, setCurrentMonth] = useState(() =>
      format(today, 'MMM-yyyy')
    );
```
We'll start by defining a UseState variable that takes in an initial value as it's argument. In our case, the initial value is the currentMonth. Then the second argument of setCurrentMonth is a function that we will use to update the initial value. 

In this specific implementation, the initial value for currentMonth is being set using a function. This function formats the current date (represented by the today variable) and turns the result into a string that represents the Month format.  

