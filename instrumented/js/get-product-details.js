function cov_1y9ki0cgy3(){var path="C:\\Users\\User\\Downloads\\second_check\\foundry-store-mgmt\\public\\js\\get-product-details.js";var hash="1ad395e6cfe6d3830c56ad9eced92fde98e6d4da";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\Downloads\\second_check\\foundry-store-mgmt\\public\\js\\get-product-details.js",statementMap:{"0":{start:{line:2,column:22},end:{line:2,column:65}},"1":{start:{line:3,column:22},end:{line:3,column:41}},"2":{start:{line:5,column:4},end:{line:42,column:5}},"3":{start:{line:6,column:22},end:{line:6,column:42}},"4":{start:{line:7,column:8},end:{line:7,column:66}},"5":{start:{line:8,column:8},end:{line:8,column:69}},"6":{start:{line:9,column:8},end:{line:35,column:10}},"7":{start:{line:10,column:28},end:{line:10,column:60}},"8":{start:{line:11,column:12},end:{line:34,column:13}},"9":{start:{line:12,column:16},end:{line:31,column:18}},"10":{start:{line:33,column:16},end:{line:33,column:98}},"11":{start:{line:36,column:8},end:{line:38,column:10}},"12":{start:{line:37,column:12},end:{line:37,column:106}},"13":{start:{line:39,column:8},end:{line:39,column:23}},"14":{start:{line:41,column:8},end:{line:41,column:91}}},fnMap:{"0":{name:"getProductDetails",decl:{start:{line:1,column:9},end:{line:1,column:26}},loc:{start:{line:1,column:29},end:{line:43,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:9,column:25},end:{line:9,column:26}},loc:{start:{line:9,column:37},end:{line:35,column:9}},line:9},"2":{name:"(anonymous_2)",decl:{start:{line:36,column:26},end:{line:36,column:27}},loc:{start:{line:36,column:38},end:{line:38,column:9}},line:36}},branchMap:{"0":{loc:{start:{line:5,column:4},end:{line:42,column:5}},type:"if",locations:[{start:{line:5,column:4},end:{line:42,column:5}},{start:{line:40,column:11},end:{line:42,column:5}}],line:5},"1":{loc:{start:{line:11,column:12},end:{line:34,column:13}},type:"if",locations:[{start:{line:11,column:12},end:{line:34,column:13}},{start:{line:32,column:19},end:{line:34,column:13}}],line:11}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1ad395e6cfe6d3830c56ad9eced92fde98e6d4da"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1y9ki0cgy3=function(){return actualCoverage;};}return actualCoverage;}cov_1y9ki0cgy3();function getProductDetails(){cov_1y9ki0cgy3().f[0]++;const urlParams=(cov_1y9ki0cgy3().s[0]++,new URLSearchParams(window.location.search));const productId=(cov_1y9ki0cgy3().s[1]++,urlParams.get('id'));cov_1y9ki0cgy3().s[2]++;if(productId){cov_1y9ki0cgy3().b[0][0]++;var request=(cov_1y9ki0cgy3().s[3]++,new XMLHttpRequest());cov_1y9ki0cgy3().s[4]++;request.open('GET',`/get-product?id=${productId}`,true);cov_1y9ki0cgy3().s[5]++;request.setRequestHeader('Content-Type','application/json');cov_1y9ki0cgy3().s[6]++;request.onload=function(){cov_1y9ki0cgy3().f[1]++;const product=(cov_1y9ki0cgy3().s[7]++,JSON.parse(request.responseText));cov_1y9ki0cgy3().s[8]++;if(product){cov_1y9ki0cgy3().b[1][0]++;cov_1y9ki0cgy3().s[9]++;document.getElementById('productDetails').innerHTML=`
                    <div class="product-detail-left">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="product-detail-right">
                        <h1>${product.name} <a href="edit-product.html?id=${product.id}"><img src="images/edit-icon.png" alt="Edit" class="edit-icon"></a></h1>
                        <p class="product-price">S$ ${product.price}</p>
                        <hr>
                        <h3>Description</h3>
                        <p>${product.description}</p>
                        <hr>
                        <h3>Size & Fit</h3>
                        <p>${product.size}</p>
                        <a href="reviews.html?id=${product.id}" class="review-link">Review</a> 
                        <div class="product-actions">
                            <button class="add-to-cart-btn">Add to cart</button>
                            <button class="checkout-btn">Checkout</button>
                        </div>
                    </div>
                `;}else{cov_1y9ki0cgy3().b[1][1]++;cov_1y9ki0cgy3().s[10]++;document.getElementById('productDetails').innerHTML=`<p>Product not found.</p>`;}};cov_1y9ki0cgy3().s[11]++;request.onerror=function(){cov_1y9ki0cgy3().f[2]++;cov_1y9ki0cgy3().s[12]++;document.getElementById('productDetails').innerHTML=`<p>Error loading product details.</p>`;};cov_1y9ki0cgy3().s[13]++;request.send();}else{cov_1y9ki0cgy3().b[0][1]++;cov_1y9ki0cgy3().s[14]++;document.getElementById('productDetails').innerHTML=`<p>Invalid product ID.</p>`;}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXk5a2kwY2d5MyIsImFjdHVhbENvdmVyYWdlIiwiZ2V0UHJvZHVjdERldGFpbHMiLCJmIiwidXJsUGFyYW1zIiwicyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicHJvZHVjdElkIiwiZ2V0IiwiYiIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwicHJvZHVjdCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJpbWFnZSIsIm5hbWUiLCJpZCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJzaXplIiwib25lcnJvciIsInNlbmQiXSwic291cmNlcyI6WyJnZXQtcHJvZHVjdC1kZXRhaWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFByb2R1Y3REZXRhaWxzKCkge1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHVybFBhcmFtcy5nZXQoJ2lkJyk7XHJcblxyXG4gICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBgL2dldC1wcm9kdWN0P2lkPSR7cHJvZHVjdElkfWAsIHRydWUpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3REZXRhaWxzJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9kdWN0LmltYWdlfVwiIGFsdD1cIiR7cHJvZHVjdC5uYW1lfVwiIGNsYXNzPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHtwcm9kdWN0Lm5hbWV9IDxhIGhyZWY9XCJlZGl0LXByb2R1Y3QuaHRtbD9pZD0ke3Byb2R1Y3QuaWR9XCI+PGltZyBzcmM9XCJpbWFnZXMvZWRpdC1pY29uLnBuZ1wiIGFsdD1cIkVkaXRcIiBjbGFzcz1cImVkaXQtaWNvblwiPjwvYT48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5TJCAke3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNpemUgJiBGaXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2R1Y3Quc2l6ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJyZXZpZXdzLmh0bWw/aWQ9JHtwcm9kdWN0LmlkfVwiIGNsYXNzPVwicmV2aWV3LWxpbmtcIj5SZXZpZXc8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRvLWNhcnQtYnRuXCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVja291dC1idG5cIj5DaGVja291dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdERldGFpbHMnKS5pbm5lckhUTUwgPSBgPHA+UHJvZHVjdCBub3QgZm91bmQuPC9wPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3REZXRhaWxzJykuaW5uZXJIVE1MID0gYDxwPkVycm9yIGxvYWRpbmcgcHJvZHVjdCBkZXRhaWxzLjwvcD5gO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0RGV0YWlscycpLmlubmVySFRNTCA9IGA8cD5JbnZhbGlkIHByb2R1Y3QgSUQuPC9wPmA7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiNjVFQWVZO0FBQUFBLGNB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