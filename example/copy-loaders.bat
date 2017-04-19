RMDIR /S /Q dist\simplr-loaders
RMDIR /S /Q .\@types
XCOPY /s /Y ..\dist\* dist\simplr-loaders\
XCOPY /Y /S ..\@types\* .\@types\