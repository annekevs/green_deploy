echo "deploy process start..."
echo "removing build file in green_deploy..."
rm -r build
cd ../mygreen
echo "removing build file in mygreen..."
rm -r build
echo "building mygreen..."
npm run build
echo "copying build..."
cp -R build ../green_deploy/
cd ../green_deploy
echo "deploying on heroku..."
git add .
git commit -m "update"
git push heroku main
