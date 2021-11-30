echo "deploy process start..."
echo "remove build file"
rmdir /s /q build
cd ..\..\Application\mygreen
rmdir /s /q build
echo "building mygreen"
npm run build
echo "copy build"
xcopy /s build ..\..\GreenDeploy\greenapp\build\
cd ..\..\GreenDeploy\greenapp
echo "deploying on heroku..."
git add .
git commit -m "update"
git push heroku master
