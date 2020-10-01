# lab-03-rock-paper-scissors
Goal: Let the user choose Rock, Paper or Scissors. Track their wins and losses (show as a percent)

STATE:
- wins
- losses
- draws
- total
- _(current user selection -- radio button does this for us)_
How do we SHOW this state?
- display it in divs’ textContent property
HTML Elements we need to grab:
- State changers:
    - Rock, Paper, Scissor (radio button)
        - Why? To GET the user GUESS
    - Play button
        - Why? To confirm the user guess
- State viewers:
    - insruction paragraph
        - show the insruction
    - win span
        - show the wins
    - loss span
        - show the losses
    - draw span
        - show the draw
    - result span
        - show the result
How/when do we CHANGE this state?
- when the user makes a selection and clicks the ‘Play’ button
    - on click, what happens?
        - ‘get-random-throw’ and find out what the computer threw
        - get the user’s throw
        - we determine if the user was won, lost or draw
            - if the user won, increment the wins AND increment total
            - if the user lost, increment the losses AND increment total
            - if it is a draw, increment the draws AND increment total