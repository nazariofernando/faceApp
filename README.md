# faceApp

So, first of all, it is pretty much done. Some changes and good to go!

First of all, you need to download nodejs and npm
after that, clone or donwload the files and run these lines on your terminal:

npm install -g firebase-tools
npm install firebase
npm install firebase-admin
npm install express
npm install body-parser
npm install python-shell
npm install get-pixels

Open chrome the link https://faceapp-2c747.firebaseapp.com/#!/
Enable CORS
Go to the right corner and click on the little shield, just next to the "favorite star" and enable scripts

Put the python code inside the python folder (denis_app/backend/python)
Go to the back end, make the necessaries changes

Go to backend foder and run either npm start or nodemon (I recomend the latter, if you have it installed in your computer)

So, there are somethings I still need to change and for that I need to understand the coordinates you need for the code
Also, you must send me the output picture in either an URL or in RGBAlfa pixels
If you do the latter, it should go in a pixel array, in which each group four ints is a pixel. For instance:

pixArray = [200, 150, 122, 100, 123, 215, 78, 30]
has 2 pixels

pixArray[0] is the R channel of the first pixel
pixArray[1] is the G channel of the first pixel
pixArray[2] is the B channel of the first pixel
pixArray[3] is the Alpha channel of the first pixel
pixArray[4] is the R channel of the second pixel

and so forth
