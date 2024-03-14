# Hangman

This activity is about developing the hangman game using both classes and modules. The objective is to solve the same problem with two different approaches and compare them.

## The game

As you know, the hangman game is about guessing a word before running out of attempts. The word is chosen randomly by the game and the player has finite attempts to guess the letters. If the player runs out of attempts, the user loses the game.
The user then has to complete the word by making guesses letter by letter, until the whole word is formed.

## Environment

The user will interact with the CLI, so you must use Node to develop the game.

## Rules

1. The user starts with 3 lifes, each time a guess is incorrect, one life should be deducted.
2. If you have to substract one life, but the user has zero lifes left, the game is over.
3. The game displays the whole list of letters that are left, so the user can decide its next guess.
4. The updated list of letters is printed in console after each attempt
5. If the user inserts more than one letter in the prompt, the user loses one life and is informed that can only insert one letter.
6. The game also displays the state of the current word after each attempt
7. An example of a starting word: \_ \_ \_ \_ \_
8. An example of a word in process: h \_ l l o
9. An example of a word completed: h e l l o
10. When the user runs out of lifes, the game is over and the user is informed in the terminal.
11. When the user correctly guesses the word, the game finished and the user is congratulated in the terminal.

## Words

You can find the words.js file in this folder. That file exports a string with a long list of words. Import it wherever you need. Don't mutate/touch this variable.

## Input

You can find the readline.js file in this folder. That file shows a way in which you can enable the interactivity of the user with the terminal.

## Constraints

1. The modules approach cannot make use of classes.
2. The classes approach cannot make use of modules of module factories.
3. The modules approach must use ES Modules.
