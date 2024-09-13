# Pickup
My web application project. Will hopefully be great.

Notes can be found [here](notes.md).

## Specification 

### Elevator Pitch
People who enjoy playing basketball sometimes don't have anyone available to play with when they want to start a game of pickup. "Pickup" is a web application that allows people to connect online and either host or join pickup games posted on the application. This way whenever you are bored and want to play some basketball, you can hop on Pickup and either look for games near you or create your own and invite others to join. You can make games only available for your friends, or for anyone on the app. 

### Design

### Key Features
- Secure login over HTTPS
- Display of posts of pickup games near you
- Ability to choose viewing options (friends only or everyone)
- Ability to create your own posts with location and time information
- Ability to RSVP to others posts
- Ability to search other profiles and add friends

### Technologies
I am using the required technologies in the following ways:

- **HTML:** Will use correct HTML structure. Will have 3 HTML pages. One for login, one for viewing posts, and one for creating posts.
- **CSS:** Good styling to make it look nice.
- **JavaScript/React:** Will provide login, display others posts, allow you to react/RSVP to others posts.
- **Service:** Backend service that allows for people to create posts for others to see, and react to other posts.
- **Database/Login:** Stores users in a database. Ability to register and login users. Authentication required to create or see posts.
- **WebSocket:** You will be notified of new posts by others, and they will be presented on your screen.