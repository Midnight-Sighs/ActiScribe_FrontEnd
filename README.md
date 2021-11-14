# ActiScribe_FrontEnd

This project primarily utilizes React through a combination of class components, functional components, and the hooks of useState and useEffect.  The other things utilized here in the front end are Sass/Html/Css, Observable (formerly d3), Axios, Bootstrap (for rows/cols), Toastify and React Router.  The accompanying backend was created using Django Rest-Framework with the assistance of a MySQL database and Postman.  

Functionally, this app can do many things that will assist an activity professional in tracking their residents, activities, and participation.  You can enter in new residents and change their status to archived when they're no longer within your facility.  Facilities need to keep record of all their residents for 7 years AND it helps to see an activities' success when the residents are still in the system.  Two birds with one stone. 

You can also archive your activities for similar reasons.  You can look back and have a record of what was successful and what wasn't as the population being served changes.  You can reactivate both residents and activities if need be (sometimes people move out for long-term stays and warrant having it changed and as your population changes, an old activity may be successful again.)

This app will compare the active activities against a system calls the dimensions of wellness to help activity professionals have a well-rounded activity plan.  Similarly, in your resident detail page, you can also see what aspects of dimensions of wellness your resident is lacking.  If you activity plan is not balanced (10% in each area), you will receive a notification.  However, every single facility is different, so needs are not the same even between one month and another in the same place.  This is purely informational, not instructional.  

## Future Plans
I have a few ideas to expand this in the future and I'm sure I'll think of more.   
- I want to make the capabilities for the user to change what Dimensions of Wellness are most important in their facility so that they won't receive alerts when they aren't warranted.
- I want to expand on the resident assessments so that when your last assessment was more than 3 months prior (the minimum frequency care plans and assessments are supposed to be updated), then you'll recieve an alert for that resident.  
- I want to add the ability to track 3rd party activity providers and have that associated activity participation seperate so an activity professional can evaluate more easily if those third party providers are worth having.  
- I want to continue to expand on the tutorials.  There is a wealth of knowledge associated with this aspect of care that is often overlooked.  There are also a ton more links I can add to the tutorial section as well.  
- I may also, in the future, change the user to be less specific and more company driven, as I realized (as I was almost done) that this it the type of thing that as an activity professional leaves their position, they would pass on to the successor.  
- I also want to continue to consider a good way to implement deleting participation.  Just a straight list of participation would be pretty hefty but I also don't know if I want to add even more to the resident and/or activity pages.  

## A personal note:
This is a project I have wanted to make for a long time.  It's something that in my years as an activity director, I thought about and wanted to have.  Now I have the ability to make it so for other people to utilize and learn from.
