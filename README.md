# acro
acro is an acronym/definition viewer written in JavaScript and VBScript with an HTA interface. It can be used to search a text file for a specific acronym or definiton, and it can save new terms or phrases to the text file as well.

## Usage
Run the `acro.hta` file. Once the app loads, start typing in the search bar. Results will autopopulate once you've typed at least two characters.

To save a new term to the file, click the **Add Entry** button and follow the prompts. After a new term is added, the program will automatically reload the text file into memory.

To use an existing text file with acro, the acronyms or definitions must be separated by an equal sign (`=`) with no spaces, like this:

    acronym=what it stands for
    term or phrase=what it means

## Requirements
There must already be a text file in the same directory as the `acro.hta` file. (Future versions will create a new text file if none exists.) By default this file must be named `acronyms.txt` but you can change that by replacing the file name in the `acro.vbs` file on this line:
```vbs
Const txtFile = "acronyms.txt"
