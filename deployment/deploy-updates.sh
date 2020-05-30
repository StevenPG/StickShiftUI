# create staging directory
mkdir -p /deployment
# pull source
git clone https://github.com/StevenPG/StickShiftUI.git /deployment
# compile
cd /deployment && npm install
mkdir -p /deployment/dist
cp -rf /deployment/index.html /deployment/dist
cp -rf /deployment/js /deployment/dist
cp -rf /deployment/css /deployment/dist
cp -rf /deployment/scss /deployment/dist
cp -rf /deployment/vendor /deployment/dist
cp -rf /deployment/404.html /deployment/dist
cp -rf /deployment/aboutsite.html /deployment/dist
cp -rf /deployment/usefulresources.html /deployment/dist
# delete files in nginx folder
rm -rf /var/www/html/*
# move results of compilation into nginx folder
mv /deployment/dist/* /var/www/html/*

