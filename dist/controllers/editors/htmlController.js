"use strict";!function(){function t(t,e,r,n){function a(t){t.setValue('<html>\n  <head>\n    <meta charset="utf-8">\n    \n    <script type="text/javascript" src="example/app.js"></script>\n    <script type="text/javascript" src="example/controller.js"></script>\n    <script type="text/javascript" src="example/factory.js"></script>\n  </head>\n  <body>\n  </body>\n</html>\n'),n.html=t.getValue(),n.render(),t.on("change",function(e,r){n.html=t.getValue(),n.render()})}var c=this;c.codemirrorLoaded=a,c.editorOptions={lineWrapping:!0,lineNumbers:!0,mode:"htmlmixed"}}angular.module("app").controller("HtmlController",t),t.$inject=["$http","$scope","lineFactory","output"]}();