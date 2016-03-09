# Slice of Business Scanner

Scanner application modified for use by the Luter School of Business at CNU.

## To use on Windows

If using this application for the first time on a Windows machine, be sure to follow the steps below for proper setup:

- Replace the spreadsheet `Master.xlsx` located in the `results` folder. `Master.xlsx` should contain a list of all students in the department whose attendance you wish to track. Please ensure this spreadsheet follows the format specified by the current `Master.xlsx` spreadsheet.

After the above steps have been done, simply `dobule click` the `Scanner.lnk` file on this folder. (This is usually the file with a blue icon. It should the only file named *Scanner* in this folder).

## To use on OSX or Linux

- Replace the spreadsheet `Master.xlsx` located in the `results` folder. `Master.xlsx` should contain a list of all students in the department whose attendance you wish to track. Please ensure this spreadsheet follows the format specified by the current `Master.xlsx` spreadsheet.
- Follow the command below on a terminal (command + spacebar, type "Terminal", press ENTER).

```
cd <path/to/scanner>
cd js
node scanner.js
```

Finally, open a browser and navigate to `http://localhost:8000`

*Please note* that for use on OSX, you must already have [Node.js](https://nodejs.org/en/) installed.
