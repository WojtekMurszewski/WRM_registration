
# WRM Registration

This application is designed to streamline the process of registering patients for appointments and examinations. It consists of a patient and employee panel. The patient has access to the registration forms. The employee can view lists of registrations and delete selected registrations. He also has a view of the completed form. The programme could be successfully used in a small health centre.


## Run Locally

Clone the project

```bash
  git clone https://github.com/m-warszawski/wrm-rejestracja.git
```

Go to server directory, install dependencies and run

```bash
  cd wrm-registration-server
  npm install
  node server
```

Go to client directory, install dependencies and run

```bash
  cd wrm-registration-client
  npm install
  ng serve
```

## Tech Stack

**Client:** Angular, TypeScript, SCSS, Bootstrap

**Server:** Node, Express, NeDB


## Screenshots

![App Screenshot](https://github.com/m-warszawski/wrm-rejestracja/blob/main/Screenshot_1.png)

![App Screenshot](https://github.com/m-warszawski/wrm-rejestracja/blob/main/Screenshot_2.png)

![App Screenshot](https://github.com/m-warszawski/wrm-rejestracja/blob/main/Screenshot_3.png)



## Server API Reference

#### Add test

```http
  POST /add-test
```

#### Add test/visit

```http
  POST /add-test
  POST /add-visit
```

### Get all tests/visits

```http
  GET /get-all-tests
  GET /get-all-visits
```

#### Get single test/visit details

```http
  GET /get-test
  GET /get-visit
```

#### Remove single test/visit

```http
  GET /remove-test
  GET /remove-visit
```

#### Login to Patient/Employee panel

```http
  POST /patient-login
  POST /employee-login
```

## Authors

- [m-warszawski](https://www.github.com/m-warszawski)
- [KrystianTaf](https://www.github.com/KrystianTaf)
- [WojtekMurszewski](https://www.github.com/WojciechMurszewski)


