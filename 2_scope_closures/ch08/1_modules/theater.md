# Theater

## Objective

This exercise is about practicing the construction and usage of modules while implementing a bot for reserving tickets of a theater. This bot reserves tickets and parking slots through the command line.

## Conditions

- Our bot should serve customers in the command line. This bot should be initiallized by executing a **main.mjs** file.
- Our bot sells tickets and assigns parking slots only for the next day.

### Rooms

- The theater has two rooms.
- In each room we have rows from A to C.
- Each row has 8 seats.

### Movies

- Our theater presents movies all day with the first movie starting at 01:00pm and the last one starting at 09:00pm.
- Movies should not start at the same time. Workers in the theater cannot help people find their seats in two rooms simultaneously! Leave at least 20 minutes of difference between starting times.
- Currently our theater displays 4 movies: "Deadpool & Wolverine", "Breaking the circle", "Alien Romulus" and "Beetlejuice 2".
- You can assign each movie the duration you want as long as it ranges between 90 and 120 minutes.
- Each movie should be displayed at least twice in a day.

### Parking lots

- Our theater has 5 slots available to customers in the mall's parking lot.
- Right after selling the tickets to a customer, the bot should ask the customer if he wishes to use a slot in the parking lot (if there are slots available).
- All customers use the assigned slot exactly the same: arrives 5 min before the start of its movie and leaves 5 min after the end of its movie.
- A slot can only be assigned to a customer if he can use it the whole time defined before. If that's not possible, the bot should inform that there are no parking slots available.

## Implementation

1. You must use the module pattern to solve this exercise.
2. There are no restrictions on how many modules to create.
3. You can create as many files as you want. The only mandatory file to create is main.mjs
4. The bot should only have access to the public api(s) of the module(s).
5. Each module(s) should expose in its public api(s) function to test the consistency of the conditions set before.
6. Apart from reserving tickets and assigning slots, we should be able test conditions for rooms, movies, or parking.
7. Once you start the bot, it should be always on until you cancel the node execution (ctrl+c).

**The bot should follow this sequence when reserving a ticket:**

1. Say "Hi" to the user and ask his name.
2. Provide him two options: start reservation or start testing.
3. **test**: If user picks test, provide him with the three testing options.
4. **test**: When testing option selected, render testing results and go again to step 1.
5. **reservation**: Ask which movie the customer wants to watch (and list the options so the user picks one).
6. **reservation**: Ask which function he wishes to attend (list all different starting times for functions with available tickets. Indicate how many available tickets are left. Add a "back" option).
7. **reservation**: For the chosen function, render the occupied and available seats (see below an example).
8. **reservation**: Right after rendering the room ask the customer what seats he wants to reserve (the customer should add a sequence of seats separated by commas. Example: a1,a2,a3. Add the "back" option here as well).
9. **reservation**: Confirm the ticket(s) reservation.
10. **reservation**: Check if there is a parking slot available for the customer. If so, ask him if he wants to reserve it.
11. **reservation**: Confirm the parking slot reservation.
12. **reservation**: Say thank you to the customer.
13. Start again.

### Example of available and occupied seats

```
-screen------------------

A[X][X][ ][ ][ ][ ][ ][ ]
B[ ][X][X][X][X][ ][ ][ ]
C[ ][ ][ ][X][X][X][ ][ ]
 |1||2||3||4||5||6||7||8|
```
