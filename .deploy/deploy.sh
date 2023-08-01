#~/advanced-project/.deploy/deploy.sh
#chmod u+r+x ~/advanced-project/.deploy/deploy.sh

cd ~/advanced-project

git pull

npm run build:prod

rm -rf ~/../var/www/advanced-project/html

mv ~/advanced-project/build ~/../var/www/advanced-project/html
