# Invoice Generator - React App

This repository contains the web client for the invoice-generation, where a user can add relevant details such as invoice number, itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Here's the link to the problem statement [file](https://drive.google.com/file/d/1307DzolFWTZgZoV5osLUJc_UcL-PoaBI/view). It has been forked from [john's work](https://github.com/johnuberbacher/invoice-generator) and improvised

## Context & Requirements

### Context

The task is to add features to a invoice generator web application using React.js & Redux.js. The UI improvement includes allows users to additionally save the invoices and view them.

### Detailed Requirements

- **Redux integration:** The application should ensure proper state management throughout application.
- **Copy to a new invoice:** Using data of existing invoice to generate a new invoice.
- **List Invoices:** See all the invoices in a single page. View,edit or delete it.
- **Error Handling:** The application should handle errors gracefully: If there's an error in the file processing or data retrieval, display an appropriate error message to the user.

### Technical Requirements

- The frontend should be built using React.js.
- Redux to be used for state management.
- The application should follow responsive design principles and work on various screen sizes.

## Repository Info

### Setup Instructions

```
git clone https://github.com/chidam333/swipe-takehome.git
npm install                                                               
npm start
```

## File Structure

```
/src
    /app                # State management
    /components         # Individual Components
    /App.css            # styling
    /App.js             # Application Layout Components
    /index.js           # Entry-point Component
    /index.css          # global styling
...                     # Other Config Files like `package.json`, etc
```

### Technology Stack

Frameworks, libraries and technologies used to build the application:

```
Framework: React.js
State Management: Redux.js - https://redux.js.org
Components & Theming: Bootstrap v5 - https://getbootstrap.com
```
### Error Handling

As mentioned above, this application handles two cases for handling errors:

1. Checking for duplicate invoice .
2. Checking for missing info.


### Live Demo
https://swipe-takehome.chidam.xyz/

### Screenshots

![img2](https://i.ibb.co/N2Y5WTx/swipe1.png)
![img1](https://i.ibb.co/rsg5knZ/swipe2.png)

### Meta

chidam - [chidam.xyz](https://chidam.xyz)
&nbsp;&&&nbsp; 
John Uberbacher – [johnuberbacher.com](https://johnuberbacher.com)
