import express from 'express'
const app=express();
const port=3000
console.log("hello");

app.get('/',(req,res)=>{
    res.send([
        {
          "cursor": "VF0toEXvEAthMHQyNjl2NjFmYnNwYWpn",
          "service": {
            "id": "srv-ch25a0t269v61fbspajg",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-04-22T21:43:31.714566Z",
            "name": "PractocodeServerNodeJS",
            "notifyOnFail": "default",
            "ownerId": "usr-ch2460jh4hsum44t5jrg",
            "repo": "https://github.com/sari4983/PracticodeServerNodeJS",
            "rootDir": "",
            "slug": "practocodeservernodejs",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-04-27T20:56:12.002814Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "./Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "singapore",
              "url": "https://practocodeservernodejs.onrender.com"
            },
            "imagePath": null
          }
        },
        {
          "cursor": "VF0toEXvEAsxcWRnazRxYXJxbmhqNjZn",
          "service": {
            "id": "srv-ch251qdgk4qarqnhj66g",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-04-22T21:26:01.740741Z",
            "name": "PracticodeClientReact",
            "notifyOnFail": "default",
            "ownerId": "usr-ch2460jh4hsum44t5jrg",
            "repo": "https://github.com/sari4983/PracticodeClientReact",
            "rootDir": "",
            "slug": "practicodeclientreact",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2023-04-27T21:13:40.410198Z",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "parentServer": null,
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://practicodeclientreact.onrender.com"
            },
            "imagePath": null
          }
        }
      ])
})

app.listen(port,()=>{
console.log(`listen to port: ${port}`)
})