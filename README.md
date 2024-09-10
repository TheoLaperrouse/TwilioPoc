# Twilio SMS Alert

This script sends SMS alerts using Twilio's API.

## Installation

1. Install dependencies:
```bash
yarn install
```

2. Add your Twilio information in the .env file  :
```
TWILIO_ACCOUNT_SID=ACCOUNT_SID
TWILIO_AUTH_TOKEN=AUTH_TOKEN
TWILIO_PHONE_NUMBER=+33612345678
```

## Usage

```sh
yarn sendSMS +33612345678
```