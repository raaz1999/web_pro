# Comment executer le projet;

## si vous utilisez votre propre environement :

    pour frontend:

    * npm install
    * npm start

    pour Backend:

    * yarn install
    * yarn install


## par Docker : 

    * docker pull raaz199/map_frontend:1.0
    * docker pull raaz199/map_backend:1.0

    * docker run --publish 3000:3000 raaz199\map_frontend:1.0
    * docker run --publish 4000:4000 raaz199\map_backend:1.0

## par minikube :

    ### Démarer le premier terminal:
        
        installer minikube :

        * sudo mkdir -p /usr/local/bin/
        * sudo install minikube /usr/local/bin/

        Aller au au dossier deploiment : 

        * cd Deploiment 
        * kubectl -f apply backend.yaml
        * kubectl -f apply frontend.yaml

        kubectl port-forward svc svc/map-frontend-srv 4000:4000

    ### Dans le deuxième terminal :
        * minikube service map-frontend-srv



la méthode qui prend moins de temps : Docker 
        
