# a2excel365
angular 2 excel365 addon project

# preinstall
npm i -g gulp gulp-cli typescript typings ts-node


# Hosting
```
  npm run serve
```

You can host your add-in locally or use any web server. Make sure that the add-in is served using HTTPS and also update the add-ins source location in the manifest.

# Sideloading

Load the add-in into Excel. The easiest way to do this is by sideloading the add-in in Excel Online: 
1. Go to [Excel](https://office.live.com/start/Excel.aspx?auth=2&nf=1) and create a blank document.

2. Go to Insert > Office Add-ins.
 On the My Add-ins tab (or My Organization tab if you're signed in to a work or school account),
 you'll see a link in the upper-right corner of the dialog box to Upload My add-in or Manage My Add-ins.

3. Manage My Add-ins will open a menu where you can then choose Upload My add-in.

4. Choose Browse and select the my-office-add-in-manifest.xml file from the root of the project folder, and then choose Upload.

5. Your add-in will load in [Excel](https://office.live.com/start/Excel.aspx?auth=2&nf=1).
  If you would like to sideload your add-in into the Excel desktop client, see documentation for [sideloading on Windows](https://dev.office.com/docs/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins) or [sideloading on iPad and Mac](https://dev.office.com/docs/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac).

#Additional resources

Design & Develop
  * [Using the Office JavaScript APIs](https://dev.office.com/reference/add-ins/javascript-api-for-office)
  * [Get the UX Design Templates](https://dev.office.com/docs/add-ins/design/ux-design-patterns)
  * [Best practices for designing Office Add-ins](https://dev.office.com/docs/add-ins/design/add-in-design)
  * [Using Fabric](http://dev.office.com/fabric#/get-started)
  * [Using the Office JavaScript API Helpers](https://github.com/OfficeDev/office-js-helpers)
Debug & Test
  * [Debug add-ins](https://dev.office.com/docs/add-ins/get-started/create-an-office-add-in-using-any-editor#debugging-your-office-add-in)
  * [Sideload add-ins](https://dev.office.com/docs/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins)
  * [Validate your manifest](https://dev.office.com/docs/add-ins/testing/troubleshoot-manifest)
Deploy & Publish
  * [Deploy your add-in to Azure](https://dev.office.com/docs/add-ins/publish/host-an-office-add-in-on-microsoft-azure)
  * [Prepare for Office store validation](https://msdn.microsoft.com/en-us/library/office/jj591603.aspx#Anchor_0)
  * [Publish your Office add-in to the store](https://msdn.microsoft.com/en-us/library/office/jj220037.aspx)

