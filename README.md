# User Auth App With MERN Stack
This is a simple user authorization application that I developed during the NodeJS learning process and was my first backend experience. 

## Features

- With [React Hook Form](https://react-hook-form.com/), possible situations such as invalid email, weak passwords and passwords not matching are controlled by the application. 
- When adding the user to the database, their password is hidden with [bcrypt](https://www.npmjs.com/package/bcrypt).
- The previously logged in user is stored with [React Native Async Storage](https://github.com/react-native-async-storage/async-storage) and is redirected directly to the homepage when logged in again. 

## Tools & Resources

For frontend:

- [Tailwind React Native](https://github.com/vadimdemedes/tailwind-rn)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Navigation](https://reactnavigation.org/) 
- [React Hook Form](https://react-hook-form.com/)
- [Classnames](https://www.npmjs.com/package/classnames)

For backend:

- [Axios](https://github.com/axios/axios)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Express-Validator](https://www.npmjs.com/package/express-validator)
- [Express](https://www.npmjs.com/package/express)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Real Android Device ScreenShots

<div align='center'> 
<img src="https://user-images.githubusercontent.com/86911611/190851141-eb4e0070-5806-4446-a33b-e46bc9aec068.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/190851149-bf237004-4756-4e04-8475-cc37227aa05c.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/190851159-95c22c2f-a8da-42ae-855a-90f2f1a14c1b.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/190851168-33666957-933d-4829-ad42-3658eb50c65e.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/190851174-2319045b-b391-4aeb-8b08-706b90c87ffe.jpg" width="400" height="900" /><img/>
<img src="https://user-images.githubusercontent.com/86911611/190851180-07b99649-2fb1-43cf-b62a-f1878e8704cb.jpg" width="400" height="900" /><img/>
</div>

## Installation

Clone this repository on your local machine.

```
git clone https://github.com/DogukanSakin/UserAuthAppWithMERN.git
```

## Usage

1) Update the clientConfig.js file in the main directory with your own information.

2) You should use these two commands in both the main directory and the backend directory:
```
npm init
npm install
```

4) Start server in backend directory
```
npm start
```

5) Start RN in main directory
```
npx react-native start
```

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

## To Run the Application
In the project directory you can run:

```
For Android Emulator: npx react-native run-android
```

```
For iOS Emulator: npx react-native run-ios
```


