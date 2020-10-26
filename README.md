# Example React/TypeScript Application with Auth0 

> Borrowed some stuff from here https://github.com/auth0-blog/auth0-react-sample-classes

## Get Started (develop)
Add environment variables to your `.env` file 

install dependencies:

```console
yarn
```

Run the client/server:

```console
yarn dev
```

## Get Started (Docker)
Add environment variables to your `.env` file

Build docker container:

```console
docker build -t auth0-react:latest .
```

Run docker container:

```console
docker run -itd -p 4040:4040 -p 6060:6060 auth0-react:latest
```

### Additional support 

For auth0 specific support please go to the [original guide](https://github.com/auth0-blog/auth0-react-sample-classes/blob/main/README.md)

For any other support please create an issue. 

#### Why this was created

There was no real good example that used TypeScript and React 