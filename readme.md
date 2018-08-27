# Electron Chromecast Example

**PSA: Dont Try to `npm install` this package until you have read Getting Started**

This example servers as a boilerplater for creating chromecast applications that use a Custom Receiver from Windows only.

I'd like to add more in the future but am starting with windows as its what I use as my primary development operating system

## Getting Started

### 1. Get Access to the Google Cast SDK Developer Console

Head over to [Google Cast SDK Developer Console](https://cast.google.com/publish) and create an account. This will prompt you to pay $5 USD.

### 2. Register Casting Devices

Still in the Casting Console, Click on "Add New Device", and type in the serial number of your casting device. If you have more than one that you would like to add, do that now.

This doesnt change the functionality of the casting device, doing this tells your casting device to start trusting application IDs created by you. If the device is not registered, it wont react to you trying to cast to it.

PS: This will take about 15 minutes.

### 3. 

### 4. Installing the Bonjour SDK

The network discovery aspect of Google casting devices such as a chromecast or google home is controlled by something called `mDNS`.
by default, _most_ app do not have access to C++ files with that functionality. As a result, the casting API used in this example
requires you to install an external tool to add this functionality.

PS: Chrome itself hardcodes in a similar utility, thats why you dont need to install something like Bonjour before you install Chrome. Unfortunately, this version of `mDNS` is not present in electron.

To get the Bonjour SDK from Apple, you'll need an apple developer account. Create one [here](https://developer.apple.com/)

After you created the account and logged in, head over to the [Bonjour SDK Download Page](https://developer.apple.com/download/more/?=Bonjour%20SDK%20for%20Windows)

### 5. 





































