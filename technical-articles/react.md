- State is referred to as a component's memory. We often invoke state to change data on the borswer's template. 

- State is what makes a component or varialbe "reactive", meaning React triggeres an action so as to render the data that you want to display.

- To update the template with the data you want to display, you'll neet two actions:
The ability to retain data between renders 
The ability to trigger a change from one render to another.

- This is the work of a UseState hook. The UseState hook works in two ways:

- First it needs a variable to store the initial data that you intend to use, then a function called a state setter that will update the variable and trigger React to render the component again.

- Also note that the only argument to useState is the initial value of the state variable. For example,

const [state, setState] = useState (true)

- The boolean  (true) argument we've passed to usestate is the initial value for state. So the setState function will now trigger react to return a false argument and change the component. 

So the first render will be a true state, then setState will trigger React to render 


