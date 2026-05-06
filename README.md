# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Check Your Understanding

1) **Would you use a unit test to test the “message” feature of a messaging application? Why or why not?**
No, a unit test would not be appropriate. Sending a message to another user involves multiple components interacting with each other (e.g., front-end UI, backend server, database, network requests, and the receiving user's application). Unit tests are designed to test small, isolated functions without interacting with external systems. Testing the entire message flow is better suited for an integration test or an end-to-end (E2E) test.

2) **Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?**
Yes, a unit test is perfect for this. Checking if a string's length is under 80 characters is a small, encapsulated part of the application that does not rely on external components (like a database or network). You can easily unit test the specific validation function by passing it text inputs of varying lengths (e.g., 79, 80, and 81 characters) and verifying if it correctly accepts or rejects them.
