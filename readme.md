//most of the word are written in nepali language
after data association

getting started pinterest clone

main work passport bata start
npm i passport passport-local passport-local-mongoose express-session


till this setup: backend
/profile ma jada pani app le '/' route mai redirect garai dinxa

fontend ko lagi ejs pages ma, indexjs ma registerpage banayo following by model
sangai, login page pani banayou, 
till this commit : reg working, login working, both page switching connected, but logout not working
![New Project](https://github.com/sahilmoktan/Pinterest-Clone/assets/103031235/8574f823-8938-46e8-83fe-ee16be37b299)


then after feed page add gare
![Screenshot from 2023-11-16 18-37-33](https://github.com/sahilmoktan/Pinterest-Clone/assets/103031235/5f3907ab-d5aa-4afc-8450-9df316c8e796)



ani profile page pani ejs banayo, booststrap halka mix xa
![Screenshot from 2023-11-16 18-37-13](https://github.com/sahilmoktan/Pinterest-Clone/assets/103031235/dd5bb02e-1638-4b82-b358-71aa38570b22)



laptop change test
if nodemon not working poweshell run as administrator then, : Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

-- 2024 jan 2
login garda password mistake huda kai error audaina so, gonna show error flash message
for flash messages : npm i connect-flash
failureFlash: true added
required in app.js too 

then profile ma /logout , show user's name and id

post where has post, image and caption by using multer:
npm i uuid multer,
uuid gives uique id , multer allows upload imges
created multer file code, imported it on index.js
file uploaded with extename but left to save it's id for showing as a post with it's caption
