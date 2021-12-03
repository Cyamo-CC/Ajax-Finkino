# Ajax-Finkino
During my Javascript course I learned to mess around with ajax and apis. 

Project is not perfect due to problems with the api link.
For some reason api:
https://www.finnkino.fi/xml/Schedule/
does NOT include theatres ouside of capital area.
Also The "TheatreID" does NOT stay the same everyday. 
file
https://www.finnkino.fi/xml/TheatreAreas/
gives each theatre ID but they do not correspond on the Schedule file.


![TheatreID problem](https://user-images.githubusercontent.com/62052617/144579135-bda8bfca-6d6d-4e42-9054-7c6cb437344a.PNG)




After some research I found that the API site has other files. One schedule file for each theatre area, where the schedule info for that Theatre is shown.



![Why its not working](https://user-images.githubusercontent.com/62052617/144579357-d4ffefde-993f-4276-8584-366022f54cc0.PNG)




This would mean multiple file feches to EACH theatre are link separately.
If I had time I would go and link them, however this prohect has time limitations and I decided to leave as it is. For now. 
Here is the link to main APi page: https://www.finnkino.fi/xml
