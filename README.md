# QR Code Name Generator

This Node.js project generates a random villain name, a superhero name, and a QR code based on a user's input. It also saves the generated names into a text file.

## Features
- Prompts the user for their name.
- Generates a random villain name and a superhero name.
- Creates QR codes for the user's real name, villain name, and superhero name.
- Saves the generated names in a text file.

## Installation
### Prerequisites
Ensure you have Node.js installed on your system.

### Steps
1. Clone this repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Install dependencies by running:
   ```sh
   npm install sillyname superheroes qr-image inquirer
   ```

## Usage
Run the script using:
```sh
node index.js
```
Follow the prompt to enter your name, and the script will generate names and QR codes.

## Output
- **qr1.png**: QR code of the user's name.
- **qr2.png**: QR code of the generated villain name.
- **qr3.png**: QR code of the generated superhero name.
- **myhero.txt**: A text file containing the real name, villain name, and superhero name.

## Dependencies
- `sillyname`: Generates random names.
- `superheroes`: Generates random superhero names.
- `qr-image`: Creates QR codes.
- `inquirer`: Handles user input.

## License
This project is open-source and available under the MIT License.

