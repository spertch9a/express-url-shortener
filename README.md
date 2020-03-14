# Node.js challenge: URL shortener

## Level 1

Let's create a new URL shortening service. The user creates a short link, and as a response they will get the new short link.

- Install useful packages (test if package.json has body-parser)
- Healthcheck endpoint


### Challenge

#### Expose the following endpoints:

- `GET /health` is a service liveness health check endpoint, it returns HTTP code 200 if the service is up and running

- Urls API endpoints starts with `/api/urls`, you need to:
  - An endpoint to create an "url object". If the request payload is not valid (user sent wrong URL format and/or more parameters than expected) reject it, it could be malicious.
  - An endpoint to get our "url object" (we will need this to display our url detail in the front-end)

- A `GET /:id` endpoint to redirect users to their original urls (**BONUS**: if I pass a `forceHttps=true` optional query parameter I will be redirected to http**s**://my-original.site/path/xx)

#### Also

- Bump the project's version number to `1.0.0`
- Use MIT License (add it to package.json)

### Next Challenges

- We will use database
- We will create some analytics features
- We will use a third-party URL scanner to scan our links: https://developers.virustotal.com/reference#url-scan