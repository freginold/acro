' acronym viewer VBScript file

' ------------- vars & constants -------------

Option Explicit

Const appWidth = 1000
Const appHeight = 700

Const txtFile = "acronyms.txt"	' text file name; default = "acronyms.txt"

Dim fs, lines(), sourceFile, numLines

Set fs=CreateObject("Scripting.FileSystemObject")


' ------------- subs & functions -------------

Sub openTxtFile(txtFile)
	' open file, get acronyms
	Dim thisFile, line, x
	if Not fs.FileExists(txtFile) then showError("fnf") : exit sub
	set thisFile = fs.OpenTextFile(txtFile, 1)
	x = numLines
	do until thisFile.AtEndOfStream
		line = thisFile.ReadLine
		if line <> "" and line <> " " then
			if x = ubound(lines) then redim preserve lines(x+1)
			lines(x) = line
			x = x + 1
		end if
	loop
	numLines = ubound(lines)
	thisFile.close
End Sub

Sub showError(error)
	' display an error message if needed
	if error = "fnf" then resultsDiv.innerHTML = "<br><div style='text-align:center;'>[<span style='font-style:italic;'>Source file not found.</span>]</div>"
End Sub

Function getLine(thisLine)
	' return current line
	getLine = lines(thisLine)
End Function

Sub addLine(txtFile)
	' add a new line to a file and save it
	Dim thisFile
	if Not fs.FileExists(txtFile) then msgbox "File not found; can not add new entry." : exit sub
	set thisFile = fs.OpenTextFile(txtFile, 8)
	thisFile.writeLine(acroToAdd & "=" & defToAdd & VbCrLf)
	thisFile.close
	initList
	showResultsDiv
End Sub

Sub initList
	' initialize or reinitialize array, open files, get words
	clearBox()
	Erase lines
	Redim lines(0)
	numLines = 0
	openTxtFile(txtFile)
End Sub


' ------------- start -------------

window.moveTo (screen.availWidth / 2) - (appWidth / 2), (screen.availHeight / 2) - (appHeight / 2)
window.resizeTo appWidth, appHeight
initList
