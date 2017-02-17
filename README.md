#SecretSkate

A user driven app that allows skaters to view secret skating spots as well as record their tricks. Videos will populate the map where users can view the location and up vote the coolest trick. (Coolest tricks on top are shown with the most "ice cream points")

The theme of our project was unfamiliar environments. We chose to learn Ionic v1 for our mobile app. Other relevant and unfamiliar things were AWS S3_Buckets and ionic plug in's called ngCordova. S3_Buckets were used to store our video content and provide us with the video url. Given the URL we could view freshly recorded content. ngCordova was used to manipulate the video files (playback, view, record, pause, stop, etc...)



#Heroku API Endpoints 

https://secretskate-backend.herokuapp.com

##Get all skate videos
GET/skate-spot/video/url 

##Get all skate-spots by id
Get/skate-spot/id

##CLI Setup Commands 

Install yarn 
- createdb secretskate 
- knex migrate:latest
- knex seed:run 


