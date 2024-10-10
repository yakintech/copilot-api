# Project Name

## Description
A brief description of what your project does and its purpose.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage
1. Create a `.env` file in the root directory and add your environment variables:
    ```plaintext
    MONGO_URI=your_mongo_db_connection_string
    PORT=3000
    ```
2. Start the server:
    ```sh
    npm start
    ```
3. The server will be running on `http://localhost:3000`.

## API Endpoints
### User Endpoints
- **Create User**
    - **URL:** `/api/users`
    - **Method:** `POST`
    - **Body:**
        ```json
        {
            "email": "user@example.com",
            "phone": "1234567890",
            "address": "123 Street",
            "password": "password",
            "profileImage": "path/to/image"
        }
        ```
    - **Response:**
        ```json
        {
            "email": "user@example.com",
            "phone": "1234567890",
            "address": "123 Street",
            "profileImage": "uploads/1234567890-image.jpg"
        }
        ```

- **Get All Users**
    - **URL:** `/api/users`
    - **Method:** `GET`
    - **Response:**
        ```json
        [
            {
                "email": "user1@example.com",
                "phone": "1234567890",
                "address": "123 Street",
                "profileImage": "uploads/1234567890-image.jpg"
            },
            {
                "email": "user2@example.com",
                "phone": "0987654321",
                "address": "456 Avenue",
                "profileImage": "uploads/0987654321-image.jpg"
            }
        ]
        ```

- **Get User by ID**
    - **URL:** `/api/users/:id`
    - **Method:** `GET`
    - **Response:**
        ```json
        {
            "email": "user@example.com",
            "phone": "1234567890",
            "address": "123 Street",
            "profileImage": "uploads/1234567890-image.jpg"
        }
        ```

- **Update User**
    - **URL:** `/api/users/:id`
    - **Method:** `PUT`
    - **Body:**
        ```json
        {
            "email": "newuser@example.com",
            "phone": "0987654321",
            "address": "456 Avenue",
            "password": "newpassword",
            "profileImage": "path/to/newimage"
        }
        ```
    - **Response:**
        ```json
        {
            "email": "newuser@example.com",
            "phone": "0987654321",
            "address": "456 Avenue",
            "profileImage": "uploads/0987654321-newimage.jpg"
        }
        ```

- **Delete User**
    - **URL:** `/api/users/:id`
    - **Method:** `DELETE`
    - **Response:**
        ```json
        {
            "message": "User deleted successfully"
        }
        ```

## Environment Variables
The following environment variables need to be set in your [.env](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fcagatayyildiz%2FDesktop%2Fcopilot-api%2F.env%22%2C%22path%22%3A%22%2FUsers%2Fcagatayyildiz%2FDesktop%2Fcopilot-api%2F.env%22%2C%22scheme%22%3A%22file%22%7D%7D) file:
- `MONGO_URI`: Your MongoDB connection string.
- `PORT`: The port on which the server will run (default is 3000).

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.