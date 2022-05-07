# API Route Spec
Below is an outline of the API routes available to both users (parking and paying) and admins (enforcing parking rules).

## Routes
User Types
1. Drivers
2. Parking Enforcement

API Data Objects
1. [Spot](./api/spot/)  
2. [Invoice](./api/invoice/)

5 Routes
1. Route: `/api/v1/spot/details`
    - Method: `GET`
    - URL: https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/spot/details?uuid=d8d05dce-dbae-421b-9bdd-ea3ce75b7a77
```json
Body: None

Returns:
                {
                  "success": true,
                  "message": {
                      "address": "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
                      "expirationTime": 1648319420,
                      "startTime": 1648317620,
                      "expired": false,
                      "licensePlate": "SC39133",
                      "occupied": true,
                      "duration": 1800
                  }
                }
```
2. Route: `/api/v1/spot/reserve`
    - Method: `POST`
    - URL: https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/spot/reserve
```json
Body:
                {
                  "uuid": "da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f",
                  "licensePlate": "BOE8359",
                  "duration": 1800
                }

Returns:
                {
                  "success": true,
                  "message": {
                    "_writeTime": {
                      "_seconds": 1648324950, 
                      "_nanoseconds": 756013000 
                    } 
                  }
                }
```
3. Route: `/api/v1/invoice/create`
    - Method: `POST`
    - URL: https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/invoice/create
```json
Body:
                {
                  "amount": 1,
                  "memo": {
                    "licensePlate": "BOE8359",
                    "uuid": "da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f",
                    "duration": 1800
                  }
                }

Returns:
                {
                  "success": true,
                  "message": {
                      "id": "dd610b73-aed9-456f-9cd6-7d4aeff29407",
                      "description": "{\"licensePlate\":\"BOE8359\",\"uuid\":\"da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f\",\"duration\":1800}",
                      "amount": 2261,
                      "missing_amt": 2261,
                      "status": "unpaid",
                      "fiat_value": 1,
                      "source_fiat_value": 1,
                      "currency": "USD",
                      "created_at": 1648392719,
                      "order_id": null,
                      "address": "31zEqCfzvvT8kBr9fh4U3bZj1AZM5Q4vsb",
                      "metadata": {},
                      "expires_at": "2022-03-27T15:01:59.758Z",
                      "auto_settle": false,
                      "lightning_invoice": {
                          "created_at": 1648392719,
                          "expires_at": 1648393318,
                          "payreq": "lnbc22610n1p3yq7s0pp5nfzpah463t9v25c5ja0gpy4uq5ga3lq96a6pe6adsw76dvqgv8zqdyq0v3xc6trv4h8xe2sd3shgefz8g3yyn698qen2wfz9s382atfvs3r5gnyvyckxvryx93z6vt9vdnz6drxv5cz6wtpvdjz6errxdjrgwfkxscxvwrxygkzyer4wfsjut3wcqzpgxqzjhsp58x3y8h4npmp9ws76qrrhgadsr2pa9ls6p7zxtd4k2k9p87cqjq6q9qyyssqp65meh539k2ungxpq7vw9j8s37slhg3gjcxvmnpe0fw67xuey2xpu7pcgxt5c8c5kecr4l9y5a4rd8dt0flrg98m5r2w9rkyqgc4mzsqhvm98w",
                          "settled_at": null
                      },
                      "chain_invoice": {
                          "address": "31zEqCfzvvT8kBr9fh4U3bZj1AZM5Q4vsb"
                      },
                      "transactions": [],
                      "uri": "bitcoin:31zEqCfzvvT8kBr9fh4U3bZj1AZM5Q4vsb?amount=0.00002261&label={\"licensePlate\":\"BOE8359\",\"uuid\":\"da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f\",\"duration\":1800}&lightning=LNBC22610N1P3YQ7S0PP5NFZPAH463T9V25C5JA0GPY4UQ5GA3LQ96A6PE6ADSW76DVQGV8ZQDYQ0V3XC6TRV4H8XE2SD3SHGEFZ8G3YYN698QEN2WFZ9S382ATFVS3R5GNYVYCKXVRYX93Z6VT9VDNZ6DRXV5CZ6WTPVDJZ6ERRXDJRGWFKXSCXVWRXYGKZYER4WFSJUT3WCQZPGXQZJHSP58X3Y8H4NPMP9WS76QRRHGADSR2PA9LS6P7ZXTD4K2K9P87CQJQ6Q9QYYSSQP65MEH539K2UNGXPQ7VW9J8S37SLHG3GJCXVMNPE0FW67XUEY2XPU7PCGXT5C8C5KECR4L9Y5A4RD8DT0FLRG98M5R2W9RKYQGC4MZSQHVM98W"
                  }
              }

```
4. Route: `/api/v1/invoice/check`
    - Method: `POST`
    - URL: https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/invoice/create
```json
Body:
              {
                "id": "dd610b73-aed9-456f-9cd6-7d4aeff29407"
              }

Returns:
              {
                "success": true,
                "message": {
                    "id": "dd610b73-aed9-456f-9cd6-7d4aeff29407",
                    "description": "{\"licensePlate\":\"BOE8359\",\"uuid\":\"da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f\",\"duration\":1800}",
                    "amount": 2261,
                    "missing_amt": 2261,
                    "status": "unpaid",
                    "fiat_value": 1,
                    "source_fiat_value": 1,
                    "currency": "USD",
                    "created_at": 1648392719,
                    "order_id": null,
                    "address": "31zEqCfzvvT8kBr9fh4U3bZj1AZM5Q4vsb",
                    "metadata": {},
                    "expires_at": "2022-03-27T15:01:59.758Z",
                    "auto_settle": false,
                    "lightning_invoice": {
                        "created_at": 1648392719,
                        "expires_at": 1648393318,
                        "payreq": "lnbc22610n1p3yq7s0pp5nfzpah463t9v25c5ja0gpy4uq5ga3lq96a6pe6adsw76dvqgv8zqdyq0v3xc6trv4h8xe2sd3shgefz8g3yyn698qen2wfz9s382atfvs3r5gnyvyckxvryx93z6vt9vdnz6drxv5cz6wtpvdjz6errxdjrgwfkxscxvwrxygkzyer4wfsjut3wcqzpgxqzjhsp58x3y8h4npmp9ws76qrrhgadsr2pa9ls6p7zxtd4k2k9p87cqjq6q9qyyssqp65meh539k2ungxpq7vw9j8s37slhg3gjcxvmnpe0fw67xuey2xpu7pcgxt5c8c5kecr4l9y5a4rd8dt0flrg98m5r2w9rkyqgc4mzsqhvm98w",
                        "settled_at": null
                    },
                    "chain_invoice": {
                        "address": "31zEqCfzvvT8kBr9fh4U3bZj1AZM5Q4vsb"
                    },
                    "transactions": [],
                    "uri": "bitcoin:31zEqCfzvvT8kBr9fh4U3bZj1AZM5Q4vsb?amount=0.00002261&label={\"licensePlate\":\"BOE8359\",\"uuid\":\"da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f\",\"duration\":1800}&lightning=LNBC22610N1P3YQ7S0PP5NFZPAH463T9V25C5JA0GPY4UQ5GA3LQ96A6PE6ADSW76DVQGV8ZQDYQ0V3XC6TRV4H8XE2SD3SHGEFZ8G3YYN698QEN2WFZ9S382ATFVS3R5GNYVYCKXVRYX93Z6VT9VDNZ6DRXV5CZ6WTPVDJZ6ERRXDJRGWFKXSCXVWRXYGKZYER4WFSJUT3WCQZPGXQZJHSP58X3Y8H4NPMP9WS76QRRHGADSR2PA9LS6P7ZXTD4K2K9P87CQJQ6Q9QYYSSQP65MEH539K2UNGXPQ7VW9J8S37SLHG3GJCXVMNPE0FW67XUEY2XPU7PCGXT5C8C5KECR4L9Y5A4RD8DT0FLRG98M5R2W9RKYQGC4MZSQHVM98W"
                }
            }
```

5. Route: `/api/v1/spot/empty`
  - Method: `GET`
  - URL: https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/spot/empty
	```json
  Body: None

  Returns:
            {
              "success": true,
              "message": {
                  "unoccupiedSpots": [
                      {
                          "address": "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
                          "occupied": false
                      }
                  ],
                  "expiredSpots": [
                      {
                          "expired": true,
                          "expirationTime": 1648319420,
                          "duration": 1800,
                          "address": "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
                          "occupied": true,
                          "licensePlate": "SC39133",
                          "startTime": 1648317620
                      },
                      {
                          "occupied": true,
                          "address": "79 5th St NW, Atlanta, GA 30308",
                          "expirationTime": 1648327169,
                          "expired": true,
                          "duration": 1800,
                          "licensePlate": "BOE8359",
                          "startTime": 1648325369
                      }
                  ]
              }
          }
```
