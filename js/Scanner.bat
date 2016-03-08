cd %~dp0
start chrome "http://localhost:8000"
cmd /k .\resources\node.exe scanner.js
