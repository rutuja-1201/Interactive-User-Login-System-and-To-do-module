# Interactive-User-Login-System-and-To-do-module
Interactive User Login System with JWT and To-Do Module (Including Pagination)

## Project Structure

The project is structured as follows:

- `src/`: Contains the source code of the Node.js application.
- `config/`: Configuration files for JWT secret.
- `controllers/`: Handles the logic for user authentication, to-do management, and user profile updates.
- `models/`: Defines data models or schemas for users and to-do items.
- `routes/`: Defines API routes for authentication, to-do operations, and user profile.
- `middleware/`:middleware functions for JWT authentication and error handling.

## User Authentication

The project includes user registration, login, and password reset functionalities. User data is stored in a database, and JWT-based authentication is used to secure user routes.

### User Registration
- To register a new user, make a POST request to `/auth/register`.
- Required fields: `name`, `email`, `password`.

### User Login
- To log in, make a POST request to `/auth/login`.
- Required fields: `email`, `password`.

### Password Reset
- To reset a user's password, make a POST request to `/auth/reset-password`.
- Provide a reset token from the email and the new password.

## To-Do Module

The project includes a to-do module with the following operations:

### To-Do Creation
- To create a new to-do item, make a POST request to `/todo`.
- Required fields: `title`.
- Optional fields: `description`.

### To-Do Listing
- To list to-do items with pagination, make a GET request to `/todo`.
- Query parameters: `page` (page number) and `perPage` (items per page).

### To-Do Update
- To update a to-do item, make a PUT request to `/todo/:id` with the to-do item's ID.
- Provide updated data in the request body.

### To-Do Deletion
- To delete a to-do item, make a DELETE request to `/todo/:id` with the to-do item's ID.

## Pagination

The to-do listing endpoint supports pagination to efficiently handle large lists of to-do items. Use query parameters `page` and `perPage` to control the number of items per page.

## API Documentation

API documentation for this project is available using Swagger. You can access the documentation by visiting `/api-docs` in your web browser when the server is running. It describes the available endpoints, request/response formats, and authentication methods.

## Testing

The project includes unit tests to verify the correctness and reliability of the to-do module and pagination functionality. 
You can run tests using: npm test
