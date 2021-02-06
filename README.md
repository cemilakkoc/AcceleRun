#### How to?

- Build docker image: `docker build -t agraba-firework:latest .`
- Tag Image: `docker tag agraba-firework:latest 464804777518.dkr.ecr.us-west-2.amazonaws.com/agraba-firework:latest`
- Login to AWS: `aws ecr get-login --no-include-email --region us-west-2`
- Push to AWS: `docker push 464804777518.dkr.ecr.us-west-2.amazonaws.com/agraba-firework`