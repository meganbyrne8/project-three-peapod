# Peapod Experiece Redesign: UX/UI and SEI Collaboration

### Working with a UX/UI team who had redesigned the PeaPod grocery delivery site for an older audience, the goal of this project is to build out a full CRUD application with authentication built in that reflects the msot important, or most focused on features to the UX team. 

### Data-Flow 

For full link, see here: https://whimsical.com/Vh1dA7w8Aav3mFGTRqi4Gd 

![Data Flow](https://user-images.githubusercontent.com/52892348/82210848-ce9fe080-98dd-11ea-8a27-6ecc9ede799a.png)

## Designs from UX Team

### Colors & Font Specs

![Color Specs](https://user-images.githubusercontent.com/52892348/82210970-0c046e00-98de-11ea-9f13-030814c03240.png)


![Font Specs](https://user-images.githubusercontent.com/52892348/82210995-1a528a00-98de-11ea-9213-ce492b85cc48.png)


### Desktop:
![Home Page](https://user-images.githubusercontent.com/52892348/82211085-45d57480-98de-11ea-9033-e997daf8f8b1.png)

![Browse Aisles](https://user-images.githubusercontent.com/52892348/82211121-55ed5400-98de-11ea-9332-030d47f15db1.png)

![PRODUCE SECTION](https://user-images.githubusercontent.com/52892348/82211152-643b7000-98de-11ea-8e24-42b9124f275e.png)

![ASK AN EXPERT 2](https://user-images.githubusercontent.com/52892348/82211168-6dc4d800-98de-11ea-8a41-706a90392193.png)

![Create an Account](https://user-images.githubusercontent.com/52892348/82211188-74ebe600-98de-11ea-978d-ca1fff89bade.png)

### Mobile: 

![HOME - ZIP - MOBILE](https://user-images.githubusercontent.com/52892348/82211296-a49aee00-98de-11ea-97c0-a7121b2912ee.png)

![Browse Aisles - MOBILE](https://user-images.githubusercontent.com/52892348/82211324-ae245600-98de-11ea-949a-c0748f983706.png)

![Top Selling Products - MOBILE](https://user-images.githubusercontent.com/52892348/82211335-b4b2cd80-98de-11ea-81d7-353ee12c5911.png)

![Heirloom Tomatoes - MOBILE](https://user-images.githubusercontent.com/52892348/82211359-bbd9db80-98de-11ea-8909-4c8bad87edbe.png)

![CREATE ACCOUNT - MOBILE](https://user-images.githubusercontent.com/52892348/82211374-c1372600-98de-11ea-9c87-1c63c6ecb765.png)





#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Navigation  | functional |   TK   |   TK   | _The header will contain mostly dead links during the first week sprint. with one functional link to the shopping list, and a functional icon that will direct a user to sign in, sign out, or sign up._             
|    App    | functional |   y   |   n   | _App will receive all data to render components. App will also take functionality for user verification._ |
|  Layout     | functional |   n   |   y   | _The Layout component will live in the shared folder and it will be passed to keep uniform shapre throughout comonents. It will inhert all props of child comoonents._       |
|   SignUp    | functional |   y  |   n   | _The sign up component handles creating a new user and entering them into our database via MongoDB._      |
|  SignIn     | functional |   y  |   n   | _This feature recognizes users that already do exist and verifies with our DB that they do, then signs them in._       |
|  SignOut     | functional |   n   |   n  | _The sign out comonent clears the JWT from the user's broswer and signs them out of the app, disallowing any changes to CRUD._       |
|  Product Container    | functional |   n   |   n   | _This component is the display page that corresponds to the image provided titled Produce Section above. This component takes in the working products functionality and maps through each item, returning a Product Card component for each item, making this component completely scalable._       |
|  Product Card     | functional |   y   |   y   | _The product card component inherts props and returns the exact informtion from our API with all releveant (requested) information._       |
|  Product     | functional |   y   |   n   | _The product page displays information for just one, singular product. This corresponds to the image titled "Heirloom Tomato" above, which is displaying a react modal that can be exited out of to return to the product container._       |
|  Product Create     | functional |   y   |   n  | _This component creates new products for the page, allowing any user that has admin access to easily add new items to the already existing API_       |
|  Product Edit     | functional |   y   |   y  | _This component allows the admin to add or take away information for already exisinting components._ |
|    Footer    | functional |   n   |   n   | _This component will be mostly static for the week sprint, but will reflect the Peapod site._ |

<br>

<br>

## MVP 
For our one week sprint, this project will meet a few goals, it will: 

* Be a fully functional web app using the MERN stack
* Have fully functional authentication
* Begin to reflect the design elements (color specs, font specs) handed to our team by the UX team, with some functionality. 
* Create the shell for the hamburger menu on the browse aisles page for mobile
* Create the shell for the Select Time Slot feature
* Create the shell for the Delivery Zone feature
* Create a basic search for users to be able to find items by category
* Create the shell for the Add To Cart button
* Create the shell for the star rating on each item
* Create the shell for the side bar, with at least one functioning link
* Create the shell for the Shopping List feature
* Create the shell for all users to create accounts.

## Post-MVP 
TK

### Project Delivery

Link TK 

### Code Showcase 

TK

```
TK
```

### Code Issues

TK 