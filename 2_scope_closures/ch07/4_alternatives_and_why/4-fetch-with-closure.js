/*
Exercise
- The following is a React Component called Reservation that helps an user to reserve a particular seat in an upcoming conference.
- The component internally controls the change and submit events of the form.

Refactor this file in order to:
1. Create a new function called newPost() outside the component.
2. This newPost() function receives a single parameter ("endpoint") and returns an anonymous function.
3. The returned function receives "payload" as parameter and closes over the variables: baseUrl, endpoint, and method.
4. typeof payload === 'object'.
4. All the handling of a post request (stringify payload, check response.ok, logging in console, etc) should be done in the anonymous function.
5. The control of the form, particularly the preventDefault() behavior should remain in the handleSubmit internal function.
6. Don't worry about handleChange or setTickets. They're present just to complete the picture.
7. Don't modify the return of the Reservation component.

QUESTION:
1. Is a closure implementation worth it? Why?
2. In terms of testing, in which scenario looks easier to test the post of tickets?
3. The newPost() function, may be usable by other components?
*/

function Reservation() {
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify(ticket);

    const response = await fetch(`https://my.api.com/tickets`, {
      method: "POST",
      body,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error(response.statusText);
    }
  }

  function handleChange(event) {
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={ticket.name} onChange={handleChange} />
      <input name="seat" value={ticket.seat} onChange={handleChange} />
      <button type="submit">Reserve</button>
    </form>
  );
}
