# Complete guide to React UseState by building a dynamic date component

In React, state is the data or properties that we need to track and manipulate in order to create dynamic features for an application.

UseState is a hook that allows you to pass state (data or properties) into functional components.

PS: A functional component is simply a JavaScript function that accepts data as a property (or prop) as it's argument and returns a React element (JSX).

Remember, you can only call a hook at the top level of your component. This means that you cannot call a useState hook in conditional renders or loops; you'd have to extract a new component from the initial state, and move the state into it.

In our example below, we will build a reusable and dynamic component that lets a user select a date, and also select a range of dates.

### Step 1: Define your key variables

Begin by importing UseState from React. Then define an Calendar function that initiates three main variables: today, days and colStartClasses. Here's what they represent:

- `const today ` variable initiates a function called startOfToday to represent thday's date. This was imported from the date fns library.
- `const days` variable defines an array of days found in a week
- `const colStartClasses` variable initiates an array of calendar columns represented as CSS classes. The first column is an empty strib because columns start at one 

```JavaScript
const Calendar = () => {
    const today = startOfToday()
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    const colStartClasses = [
      '',
      'col-start-2',
      'col-start-3',
      'col-start-4',
      'col-start-5',
      'col-start-6',
      'col-start-7',
    ]
}
```
### Step 2: Define your State

We'll start by defining a UseState variable that takes in an initial value as it's argument. In our case, the initial value is the currentMonth. Then the second argument of setCurrentMonth is a function that we will use to update the initial value.

In this particlular implementation, the initial value for currentMonth is being set using a function. This function formats the current date (represented by the today variable) and turns the result into a string that represents the current Month and year.

The setCurrentMonth is the setter function returned by the UseState hook. We will use this setter function to update the initial value at a later in our application.

```JavaScript
 const [currentMonth, setCurrentMonth] = useState(() =>
      format(today, 'MMM-yyyy')
    );
```

### Step 3:

Next, define a variable that called firstDayOfMonth and assign it the value obtained by parsing three arguments:
1. The currentMonth value which is the format function we defined as our initial state above. It's a string variable that contains the month and year in the 'MMM-yyyy' format
2. The Format of the date's string representation i.e. 'MMM-yyyy'
3. An Optional base date to use when parsing. 

The parse function uses the first two arguments to create a new Date object containing:
 - The first date of the first month and the year as specified
 - In the currentMonth's initial value (i.e the format function)

See the code below:

```JavaScript
const firstDayOfMonth = parse(currentMonth, 'MMM-yyyy', new Date());
```
We will implement the firstDayofMonth variable in the next steps

### Step 4: Create Array for Days in a month

We defined a function to extract the first day in a month in step 3.

We now need to extract the days in a month into an array. This will allow us to add functionality into each day so that the user can perform different actions on each day.

### Step 5: 
