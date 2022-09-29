## Devices Frontend

Devices frontend client for the DevicesApi

### Requirements

- npm and node installed locally

The backend code is on [this](https://github.com/nkalajdzic1/DevicesApi.git) repository.
See instructions in the readme file on the backend and setup backend before running the frontend code.

### Setup

1. In the root of this project run in cmd 'npm install'
2. Then run 'npm start'
3. Server is now running on url [http://localhost:3000](http://localhost:3000)

### Templates

Used standard create-react-app template

### Architecture overview

This react client arhitecture is the standard feature based archicture for React.js, following the best conventions.
Besides the feature based architecture, the data sharing and persisting is done with react-query (uses heavily caching to achieve what it needs)
Api calls are done via custom hooks that implement react-query which is basically calling the api.

### Todos to improve the frontend

1. Implement error boundary
2. Add linter
3. Add CI/CD
4. Configure Dockerfile
5. Add pre-push and pre-commit hooks
6. Add unit tests
7. Implement a real branching strategy (not just use the master branch)
