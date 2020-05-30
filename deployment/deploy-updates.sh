# create staging directory
mkdir -p /deployment
# pull source
git clone https://github.com/StevenPG/StickShiftUI.git /deployment
# compile
cd /deployment && npm install
mkdir -p /deployment/dist
cp -rf /deployment/StickShiftUI/index.html /deployment/dist
cp -rf /deployment/StickShiftUI/js /deployment/dist
cp -rf /deployment/StickShiftUI/css /deployment/dist
cp -rf /deployment/StickShiftUI/scss /deployment/dist
cp -rf /deployment/StickShiftUI/vendor /deployment/dist
cp -rf /deployment/StickShiftUI/404.html /deployment/dist
cp -rf /deployment/StickShiftUI/aboutsite.html /deployment/dist
cp -rf /deployment/StickShiftUI/usefulresources.html /deployment/dist
# delete files in nginx folder
rm -rf /var/www/html/*
# move results of compilation into nginx folder
mv /deployment/dist/* /var/www/html/*

