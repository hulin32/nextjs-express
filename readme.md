# Demo for sharing login between nextjs and session based Website


### express folder host login page

### nextjs folder host profile

how to start it:
```shell
docker-compose up --build
```
(required docker)

After start the service, you can access the http://localhost/login which comes from express, then login with `admin` and any password, then redirect to profile page, which hosted in nextjs, from profile page we can get user info from express