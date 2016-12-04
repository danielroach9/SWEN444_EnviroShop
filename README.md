EnviroShop - a web application made to connect people to a healthier lifestyle one bite at a time
Made by:  Ian Parfitt, Arsh, Daniel Roach, James Ward, Joshua Tobin

Instructions for use:

1. To begin using this application, please download node from this link:

      https://nodejs.org/en/download/

   Download either the 64 bit .msi installer or the 32 bit msi installer for Windows, or download the 64 bit .pkg
   for Mac.

2. Once the download completes, install node by following the prompts the application provides.  Ensure that node
   is added to your path if using Windows.

3. Open a CMD window on Windows, or a terminal window on Mac.

4. In the terminal, cd to the top level directory of this project.  For example, if this project is located at:

      C:\Users\Myself\Downloads\SWEN-444_EnviroShop

   then execute the command:

      cd C:\Users\Myself\Downloads\SWEN-444_EnviroShop

5. Once in the directory, execute the command:

      npm start

6. If, for any reason it issues a vague warning about not being able to run 'http-server' then execute the following
   command:

      npm install http-server

   Then issue the command:

      npm install

7. Once the server has started, it will display the following in the terminal or CMD window:

      Hit CTRL-C to stop the server

   The server is now running.  In a web browser navigate to:

      http://localhost:8000/#/

8. To start using the application the following information can be used.  For a business, login as:

      Email:  wegmans@gmail.com
      Password:  123456

   To login as an EnviroShop shopper, use the following information:

      Email:  enviroshopUser@gmail.com
      Password:  123456

   NOTE:  Some features are either not implemented, or lack robustness because the focus was on the design and therefore the
	  system does not have a backend. Data can not be persisted and user sessions will be lost when the page is refreshed.
	  However the functionality required to properly have users test the design is there.

   KNOWN BUGS/MISSING FUNCTIONALITY:
	- Refreshing the page will break profile and home links
	- Signing up for the site does not actually create a profile, users must use our given profiles in step 8
	- Users can only write one review
	- Users can not see items/reviews they have added however confirmation boxes will appear
	- Map only displays one area, users can not search or move it
	- The "Filter by" section on the search page is not implemented
	- Uploading images when adding product is not implemented
	- Users can not log out of their account

Thank you and enjoy EnviroShop!
