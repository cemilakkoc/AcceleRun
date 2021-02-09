#### How to?

- Build docker image: `docker build -t agraba-firework:latest .`
- Tag Image: `docker tag agraba-firework:latest <id>.dkr.ecr.<region>.amazonaws.com/agraba-firework:latest`
- Login to AWS: `aws ecr get-login --no-include-email --region <region>`
- Push to AWS: `docker push <id>.dkr.ecr.<region>.amazonaws.com/agraba-firework`

#### For local
- npm install
- comment the `executablePath` at line 31
- npm start