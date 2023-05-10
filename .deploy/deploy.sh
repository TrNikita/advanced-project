cd ~/advanced-project
npm run build:prod

rm -rf ~/../var/www/advanced-project/html

mv ~/advanced-project/build ~/../var/www/advanced-project/html
