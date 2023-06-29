# PORTFOLIO - GLOSSARY

_(JORGE VIEIRA MACHADO)_


## WHY `portfolio-glossary` ?
This Project was created in order to improve my knowledge in front-end and software development

------
## Build Setup
#### Requirements

* Install `node 18.15.x` [download](https://nodejs.org/en/download/releases/)

#### 1. Build / Watch in development

To render your templates in **DEV**, please serve your templates in the _port_ `8080` with the command below:

``` bash
yarn install # 👈🏼 it installs
yarn serve # 👈🏼 it running our server
```
------
#### 2. Frameworks used
### 2.1 Tailwind
reference [tailwindcss](https://v2.tailwindcss.com/docs/guides/vue-3-vite)
``` bash
yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
### 2.2 axios 
reference [axios](https://www.npmjs.com/package/axios)
``` bash
yarn add axios
```

### 2.3 font-awesome
reference [medium](https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk5YmNiMDY5MzQwYTNmMTQ3NDYyNzk0ZGZlZmE3NWU3OTk2MTM2MzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODgwNDg3ODgsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjkyNjIyODg2OTgzMzMxODYzMSIsImhkIjoib2x4YnIuY29tIiwiZW1haWwiOiJqb3JnZS52aWVpcmFAb2x4YnIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJKb3JnZSBMdWl6IFZpZWlyYSBkYSBTaWx2YSBGaWxobyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRkY3EyNWZsNDJqTm02S0RmNDAtNFFXVmdnRzZ2aXpVUE1FWmhNb0M1TE92Zz1zOTYtYyIsImdpdmVuX25hbWUiOiJKb3JnZSIsImZhbWlseV9uYW1lIjoiTHVpeiBWaWVpcmEgZGEgU2lsdmEgRmlsaG8iLCJpYXQiOjE2ODgwNDkwODgsImV4cCI6MTY4ODA1MjY4OCwianRpIjoiYjA1MGE4MzA5ZDdmZGExMWEwNmE3ODBhNGMxMWQxMDBhMzE4MGZmMCJ9.Gbyu7iTrjXLEtpsTW0cIqzc8ZVE2beiha26NQ4PKfc7nFHpkgDjakBteXQBXglZ2rkGs66kEw9LDpgVYDK8TCTyCRxL1WFu1bLWIDNiD2ypb4WMyntAe6VHR8t4MXqibB6HPioIqMegRB4VkI-dqpdupdFdlKWuVDemgu4iXLdppNn3VXh-sQSoTBBT1D-zA2kZBwpOVxBJbgqTVVlxT6z5o9RNsdGITbs_IaLS7TF-1FvIGCMH3jdLlFdDgvcSeY2I9dfSo48f_mzZP2IPBku-BcqmGiuMT4SP5lm0TVV7l-xERJ3-KrRBcn6hEKHuAGDD_qPx-qLatPFQoRnTv5g)
reference [vue3](https://stackoverflow.com/questions/66389974/using-font-awesome-in-vue-3)
``` bash
yarn add @fortawesome/fontawesome-svg-core --dev
yarn add @fortawesome/free-solid-svg-icons --dev
yarn add @fortawesome/free-brands-svg-icons --dev
yarn add @fortawesome/vue-fontawesome@latest-3 --dev
```
in main.js
```
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCoffee,
    faSpinner,
    faEdit,
    faCircle,
    faCheck,
    faPlus,
    faEquals,
    faArrowRight,
    faPencilAlt,
    faComment,
    faPhone,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faCoffee,
    faSpinner,
    faEdit,
    faCircle,
    faCheck,
    faPlus,
    faEquals,
    faArrowRight,
    faPencilAlt,
    faComment,
    faPhone,
    faPerson,
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
```
example:
``
<font-awesome-icon icon="plus" />
``
