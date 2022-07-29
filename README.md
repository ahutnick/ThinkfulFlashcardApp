# ThinkfulFlashcardApp
Capstone Flashcard App for Thinkful Course

## To Run
Download the files, run npm i, then npm run start:server AND npm run start:react concurrently.

## Purpose of App
This app is designed for teachers and students to create decks of flashcards to study. 

## JS Folder Organization (in src/Layout)
### home
Stores the files for the Home Components
- DeckCard
- DeckList
- Home

### decks
Stores the files for the Create / View / Update Deck Page (minus cards)
- DeckForm
- NewDeck
- UpdateDeck
- ViewDeck

### cards
Stores the files for Create / Update Cards / Cards table in the View Deck Page
- Card
- CardForm
- CardsList
- NewCard
- UpdateCard

### study
Stores the files for the Study functionality
- Study
- StudyCards
- NotEnoughCards

### common
The Common file in this folder exports two commonly used functions:
- breadcrumb: renders the breadcrumb navigation bar from at least one title if not two titles and a link
- DeleteBtn: allows the delete buttons for both deck and card to work onClick

## Screens

### Home Screen
The home screen lists each deck and its description. It offers the option to view a deck, study a deck, or delete the deck. It loads the decks from the database using the api call listDecks once on load.

### Study Screen
This screen allows the student to flip through the existing cards. This feature will only run if a deck has at least 3 cards. Otherwise, it will prompt the user to add cards. The student can only progress to the next card after flipping the current card over. When the last card has been flipped, the student is prompted to restart the deck. If they don't choose to restart the deck, they will be directed to the Home page. 

### View Deck Screen
This screen shows the user the current deck, including its name, description, and cards. The user also has the options of Studying, Editing the deck, Adding Cards, and Deleting the deck. 

#### Cards List
In the View Deck Screen is a table of all of the cards in the deck, front and back. The table also provides the user with the options of editing the card or deleting the card.

### Create / Update Deck
The pages to Create / Update the deck use the same form. If the user is updating the deck, then the fields will already be filled out with the current values. Clicking Submit leads the user to the view deck screen. Clicking Cancel returns the user Home.

### Create / Update Deck
The pages to Create / Update a card use the same form. If the user is updating the card, then the fields will already be filled out with the current values. If creating cards, clicking Submit clears the form after adding the card and allows the user to create more cards. If updating cards, clicking Submit returns the user to the view deck screen. Clicking Cancel on either form returns the user to the view deck screen.

