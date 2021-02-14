# # install nvm 
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# # activate nvm
# . ~/.nvm/nvm.sh

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

sudo apt install nodejs


# nvm install node


# install mongoDB

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt update

sudo apt install -y mongodb-org

# start the service
sudo systemctl start mongod

sudo systemctl status mongod

# enable the service
sudo systemctl enable mongod
