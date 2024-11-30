function cov_jg4q1ojzk(){var path="C:\\Users\\User\\Downloads\\DevOps_Part_II (2)\\DevOps_Part_II\\foundry-store-mgmt\\public\\js\\get-product-details.js";var hash="bac28cabe352965e0e0ce10695ad9eb3ce7a0d83";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\Downloads\\DevOps_Part_II (2)\\DevOps_Part_II\\foundry-store-mgmt\\public\\js\\get-product-details.js",statementMap:{"0":{start:{line:2,column:22},end:{line:2,column:65}},"1":{start:{line:3,column:22},end:{line:3,column:41}},"2":{start:{line:5,column:4},end:{line:42,column:5}},"3":{start:{line:6,column:22},end:{line:6,column:42}},"4":{start:{line:7,column:8},end:{line:7,column:66}},"5":{start:{line:8,column:8},end:{line:8,column:69}},"6":{start:{line:9,column:8},end:{line:35,column:10}},"7":{start:{line:10,column:28},end:{line:10,column:60}},"8":{start:{line:11,column:12},end:{line:34,column:13}},"9":{start:{line:12,column:16},end:{line:31,column:18}},"10":{start:{line:33,column:16},end:{line:33,column:98}},"11":{start:{line:36,column:8},end:{line:38,column:10}},"12":{start:{line:37,column:12},end:{line:37,column:106}},"13":{start:{line:39,column:8},end:{line:39,column:23}},"14":{start:{line:41,column:8},end:{line:41,column:91}}},fnMap:{"0":{name:"getProductDetails",decl:{start:{line:1,column:9},end:{line:1,column:26}},loc:{start:{line:1,column:29},end:{line:43,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:9,column:25},end:{line:9,column:26}},loc:{start:{line:9,column:37},end:{line:35,column:9}},line:9},"2":{name:"(anonymous_2)",decl:{start:{line:36,column:26},end:{line:36,column:27}},loc:{start:{line:36,column:38},end:{line:38,column:9}},line:36}},branchMap:{"0":{loc:{start:{line:5,column:4},end:{line:42,column:5}},type:"if",locations:[{start:{line:5,column:4},end:{line:42,column:5}},{start:{line:40,column:11},end:{line:42,column:5}}],line:5},"1":{loc:{start:{line:11,column:12},end:{line:34,column:13}},type:"if",locations:[{start:{line:11,column:12},end:{line:34,column:13}},{start:{line:32,column:19},end:{line:34,column:13}}],line:11}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bac28cabe352965e0e0ce10695ad9eb3ce7a0d83"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_jg4q1ojzk=function(){return actualCoverage;};}return actualCoverage;}cov_jg4q1ojzk();function getProductDetails(){cov_jg4q1ojzk().f[0]++;const urlParams=(cov_jg4q1ojzk().s[0]++,new URLSearchParams(window.location.search));const productId=(cov_jg4q1ojzk().s[1]++,urlParams.get('id'));cov_jg4q1ojzk().s[2]++;if(productId){cov_jg4q1ojzk().b[0][0]++;var request=(cov_jg4q1ojzk().s[3]++,new XMLHttpRequest());cov_jg4q1ojzk().s[4]++;request.open('GET',`/get-product?id=${productId}`,true);cov_jg4q1ojzk().s[5]++;request.setRequestHeader('Content-Type','application/json');cov_jg4q1ojzk().s[6]++;request.onload=function(){cov_jg4q1ojzk().f[1]++;const product=(cov_jg4q1ojzk().s[7]++,JSON.parse(request.responseText));cov_jg4q1ojzk().s[8]++;if(product){cov_jg4q1ojzk().b[1][0]++;cov_jg4q1ojzk().s[9]++;document.getElementById('productDetails').innerHTML=`
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
                `;}else{cov_jg4q1ojzk().b[1][1]++;cov_jg4q1ojzk().s[10]++;document.getElementById('productDetails').innerHTML=`<p>Product not found.</p>`;}};cov_jg4q1ojzk().s[11]++;request.onerror=function(){cov_jg4q1ojzk().f[2]++;cov_jg4q1ojzk().s[12]++;document.getElementById('productDetails').innerHTML=`<p>Error loading product details.</p>`;};cov_jg4q1ojzk().s[13]++;request.send();}else{cov_jg4q1ojzk().b[0][1]++;cov_jg4q1ojzk().s[14]++;document.getElementById('productDetails').innerHTML=`<p>Invalid product ID.</p>`;}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfamc0cTFvanprIiwiYWN0dWFsQ292ZXJhZ2UiLCJnZXRQcm9kdWN0RGV0YWlscyIsImYiLCJ1cmxQYXJhbXMiLCJzIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJwcm9kdWN0SWQiLCJnZXQiLCJiIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJwcm9kdWN0IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImltYWdlIiwibmFtZSIsImlkIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInNpemUiLCJvbmVycm9yIiwic2VuZCJdLCJzb3VyY2VzIjpbImdldC1wcm9kdWN0LWRldGFpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0UHJvZHVjdERldGFpbHMoKSB7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gdXJsUGFyYW1zLmdldCgnaWQnKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdElkKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGAvZ2V0LXByb2R1Y3Q/aWQ9JHtwcm9kdWN0SWR9YCwgdHJ1ZSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdERldGFpbHMnKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGV0YWlsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb2R1Y3QuaW1hZ2V9XCIgYWx0PVwiJHtwcm9kdWN0Lm5hbWV9XCIgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGV0YWlsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ke3Byb2R1Y3QubmFtZX0gPGEgaHJlZj1cImVkaXQtcHJvZHVjdC5odG1sP2lkPSR7cHJvZHVjdC5pZH1cIj48aW1nIHNyYz1cImltYWdlcy9lZGl0LWljb24ucG5nXCIgYWx0PVwiRWRpdFwiIGNsYXNzPVwiZWRpdC1pY29uXCI+PC9hPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPlMkICR7cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2l6ZSAmIEZpdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvZHVjdC5zaXplfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInJldmlld3MuaHRtbD9pZD0ke3Byb2R1Y3QuaWR9XCIgY2xhc3M9XCJyZXZpZXctbGlua1wiPlJldmlldzwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG8tY2FydC1idG5cIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrb3V0LWJ0blwiPkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0RGV0YWlscycpLmlubmVySFRNTCA9IGA8cD5Qcm9kdWN0IG5vdCBmb3VuZC48L3A+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdERldGFpbHMnKS5pbm5lckhUTUwgPSBgPHA+RXJyb3IgbG9hZGluZyBwcm9kdWN0IGRldGFpbHMuPC9wPmA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3REZXRhaWxzJykuaW5uZXJIVE1MID0gYDxwPkludmFsaWQgcHJvZHVjdCBJRC48L3A+YDtcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJ3OEVBZVk7QUFBQUEsYUFB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