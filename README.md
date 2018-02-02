# acro
acro is an acronym/definition viewer written in JavaScript and VBScript with an HTA interface. It can be used to search a text file for a specific acronym or definiton, and it can save new terms or phrases to the text file as well.

## Usage
Run the `acro.hta` file. Once the HTA interface loads, type a term in the search bar to search for it, or click the **Add** button to add a new term to the file.

## Requirements
There must already be a text file in the same directory as the `acro.hta` file. (Future versions will create a new text file if none exists.) By default this file must be named `acronyms.txt` but you can change that by replacing the file name in the `acro.vbs` file on this line:
```vbs
Const txtFile = "acronyms.txt"
