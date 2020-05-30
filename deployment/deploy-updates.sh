# create staging directory
mkdir -p /deployment
# pull source
git clone https://github.com/StevenPG/StickShiftUI.git /deployment
# compile
cd /deployment && npm install
mkdir -p /deployment/dist
cp -rf /deployment/ui/index.html /deployment/dist
cp -rf /deployment/ui/js /deployment/dist
cp -rf /deployment/ui/css /deployment/dist
cp -rf /deployment/ui/scss /deployment/dist
cp -rf /deployment/ui/vendor /deployment/dist
cp -rf /deployment/ui/404.html /deployment/dist
cp -rf /deployment/ui/aboutsite.html /deployment/dist
cp -rf /deployment/ui/usefulresources.html /deployment/dist
# delete files in nginx folder
rm -rf /var/www/html/*
# move results of compilation into nginx folder
mv /deployment/dist/* /var/www/html/*

