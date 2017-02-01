cordova build --release android

del EPSS.apk

del EPSS-release-unsigned.apk

copy platforms\\android\\build\\outputs\\apk\\android-release-unsigned.apk EPSS-release-unsigned.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore EPSS.keystore EPSS-release-unsigned.apk Epss

zipalign -v 4 EPSS-release-unsigned.apk EPSS.apk



/**

keytool -genkey -v -keystore EPSS.keystore -alias EPSS -keyalg RSA -keysize 2048 -validity 10000