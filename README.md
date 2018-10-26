# MyReads Project
This application was created with create-react-app.

To Install & Run myreads application:

-npm install


-npm start

Browser: http://localhost:3000/



App Functionality:

Select, categorize and keep track of your books.

MAIN PAGE COMPONENT:

the MainPage displays three shelves for books.
-Currently Reading
-Want to Read
-Read
Each book is shown on the correct shelf with title and authors.
Each books with no author shows "No Author".
Each book with no thumbnail shows no cover image.
The page has a control to allow users to move a book to a different shelf and it is tied to each book instance.
The page has a none option.


SEARCH PAGE COMPONENT:
You can also search and add more books in the /search page via search input field.
When user types into the search field, books that match the query populate the page.
The page shows "no results found" when text is deleted or when no book corresponds to the query.
If a book is asiggned to a shelf on to the MainPage, books shows the correct shelf on the SEARCHBOOKSPAGE.
The books shows option none if book is not assigned to a book shelf.


ROUTING:

The main page contains a link to the search page.
When the link is clicked, the search page is displayed and the URL in the browser's address displays /search


RESOURCES & TUTORIALS:

https://www.youtube.com/watch?v=i6L2jLHV9j8&t=1542s
https://www.youtube.com/watch?v=bpKI3R0nf7E
https://www.youtube.com/watch?v=92dtrNU1GQc&t=2685s
https://www.youtube.com/watch?v=Uw5Ij56RhME&t=8s
