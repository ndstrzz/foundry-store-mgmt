function cov_bjgfzd1zv(){var path="C:\\Users\\User\\Downloads\\DevOps_Part_II (2)\\DevOps_Part_II\\foundry-store-mgmt\\public\\js\\get-search_bar.js";var hash="d0c68b531156781b3b05bbc7aeccbf72a4e4a79f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\Downloads\\DevOps_Part_II (2)\\DevOps_Part_II\\foundry-store-mgmt\\public\\js\\get-search_bar.js",statementMap:{"0":{start:{line:2,column:15},end:{line:2,column:17}},"1":{start:{line:5,column:18},end:{line:5,column:38}},"2":{start:{line:6,column:4},end:{line:6,column:47}},"3":{start:{line:7,column:4},end:{line:7,column:65}},"4":{start:{line:8,column:4},end:{line:11,column:6}},"5":{start:{line:9,column:8},end:{line:9,column:52}},"6":{start:{line:10,column:8},end:{line:10,column:34}},"7":{start:{line:12,column:4},end:{line:12,column:19}},"8":{start:{line:16,column:15},end:{line:16,column:17}},"9":{start:{line:17,column:4},end:{line:26,column:7}},"10":{start:{line:18,column:8},end:{line:25,column:20}},"11":{start:{line:27,column:4},end:{line:27,column:61}},"12":{start:{line:31,column:26},end:{line:31,column:66}},"13":{start:{line:32,column:4},end:{line:32,column:33}},"14":{start:{line:34,column:4},end:{line:37,column:5}},"15":{start:{line:35,column:8},end:{line:35,column:45}},"16":{start:{line:36,column:8},end:{line:36,column:15}},"17":{start:{line:39,column:29},end:{line:41,column:5}},"18":{start:{line:40,column:8},end:{line:40,column:64}},"19":{start:{line:43,column:4},end:{line:54,column:5}},"20":{start:{line:44,column:8},end:{line:44,column:46}},"21":{start:{line:45,column:8},end:{line:51,column:11}},"22":{start:{line:46,column:12},end:{line:50,column:24}},"23":{start:{line:53,column:8},end:{line:53,column:45}}},fnMap:{"0":{name:"getProducts",decl:{start:{line:4,column:9},end:{line:4,column:20}},loc:{start:{line:4,column:23},end:{line:13,column:1}},line:4},"1":{name:"(anonymous_1)",decl:{start:{line:8,column:21},end:{line:8,column:22}},loc:{start:{line:8,column:33},end:{line:11,column:5}},line:8},"2":{name:"displayProducts",decl:{start:{line:15,column:9},end:{line:15,column:24}},loc:{start:{line:15,column:38},end:{line:28,column:1}},line:15},"3":{name:"(anonymous_3)",decl:{start:{line:17,column:24},end:{line:17,column:25}},loc:{start:{line:17,column:35},end:{line:26,column:5}},line:17},"4":{name:"searchProducts",decl:{start:{line:30,column:9},end:{line:30,column:23}},loc:{start:{line:30,column:31},end:{line:55,column:1}},line:30},"5":{name:"(anonymous_5)",decl:{start:{line:39,column:45},end:{line:39,column:46}},loc:{start:{line:40,column:8},end:{line:40,column:64}},line:40},"6":{name:"(anonymous_6)",decl:{start:{line:45,column:33},end:{line:45,column:34}},loc:{start:{line:45,column:44},end:{line:51,column:9}},line:45}},branchMap:{"0":{loc:{start:{line:34,column:4},end:{line:37,column:5}},type:"if",locations:[{start:{line:34,column:4},end:{line:37,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:34},"1":{loc:{start:{line:43,column:4},end:{line:54,column:5}},type:"if",locations:[{start:{line:43,column:4},end:{line:54,column:5}},{start:{line:52,column:11},end:{line:54,column:5}}],line:43}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d0c68b531156781b3b05bbc7aeccbf72a4e4a79f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_bjgfzd1zv=function(){return actualCoverage;};}return actualCoverage;}cov_bjgfzd1zv();// store products globally
let products=(cov_bjgfzd1zv().s[0]++,[]);function getProducts(){cov_bjgfzd1zv().f[0]++;var request=(cov_bjgfzd1zv().s[1]++,new XMLHttpRequest());cov_bjgfzd1zv().s[2]++;request.open('GET','/get-products',true);cov_bjgfzd1zv().s[3]++;request.setRequestHeader('Content-Type','application/json');cov_bjgfzd1zv().s[4]++;request.onload=function(){cov_bjgfzd1zv().f[1]++;cov_bjgfzd1zv().s[5]++;products=JSON.parse(request.responseText);cov_bjgfzd1zv().s[6]++;displayProducts(products);// display all products
};cov_bjgfzd1zv().s[7]++;request.send();}function displayProducts(productList){cov_bjgfzd1zv().f[2]++;let html=(cov_bjgfzd1zv().s[8]++,'');cov_bjgfzd1zv().s[9]++;productList.forEach(product=>{cov_bjgfzd1zv().f[3]++;cov_bjgfzd1zv().s[10]++;html+=`
            <div class="product-card" onclick="location.href='product-details.html?id=${product.id}'">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">S$ ${product.price}</p>
                </div>
            </div>`;});cov_bjgfzd1zv().s[11]++;document.querySelector('.product-grid').innerHTML=html;}function searchProducts(query){cov_bjgfzd1zv().f[4]++;const searchResults=(cov_bjgfzd1zv().s[12]++,document.getElementById('searchResults'));cov_bjgfzd1zv().s[13]++;searchResults.innerHTML='';// clear previous results
cov_bjgfzd1zv().s[14]++;if(query.trim()===''){cov_bjgfzd1zv().b[0][0]++;cov_bjgfzd1zv().s[15]++;searchResults.style.display='none';// if query is empty, hide results
cov_bjgfzd1zv().s[16]++;return;}else{cov_bjgfzd1zv().b[0][1]++;}const filteredProducts=(cov_bjgfzd1zv().s[17]++,products.filter(product=>{cov_bjgfzd1zv().f[5]++;cov_bjgfzd1zv().s[18]++;return product.name.toLowerCase().includes(query.toLowerCase());}));cov_bjgfzd1zv().s[19]++;if(filteredProducts.length>0){cov_bjgfzd1zv().b[1][0]++;cov_bjgfzd1zv().s[20]++;searchResults.style.display='block';cov_bjgfzd1zv().s[21]++;filteredProducts.forEach(product=>{cov_bjgfzd1zv().f[6]++;cov_bjgfzd1zv().s[22]++;searchResults.innerHTML+=`
                <div class="search-result-item" onclick="location.href='product-details.html?id=${product.id}'">
                    <img src="${product.image}" alt="${product.name}" class="result-image">
                    <span class="result-name">${product.name}</span>
                </div>`;});}else{cov_bjgfzd1zv().b[1][1]++;cov_bjgfzd1zv().s[23]++;searchResults.style.display='none';}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfYmpnZnpkMXp2IiwiYWN0dWFsQ292ZXJhZ2UiLCJwcm9kdWN0cyIsInMiLCJnZXRQcm9kdWN0cyIsImYiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImRpc3BsYXlQcm9kdWN0cyIsInNlbmQiLCJwcm9kdWN0TGlzdCIsImh0bWwiLCJmb3JFYWNoIiwicHJvZHVjdCIsImlkIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzZWFyY2hQcm9kdWN0cyIsInF1ZXJ5Iiwic2VhcmNoUmVzdWx0cyIsImdldEVsZW1lbnRCeUlkIiwidHJpbSIsImIiLCJzdHlsZSIsImRpc3BsYXkiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxlbmd0aCJdLCJzb3VyY2VzIjpbImdldC1zZWFyY2hfYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0b3JlIHByb2R1Y3RzIGdsb2JhbGx5XHJcbmxldCBwcm9kdWN0cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XHJcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCAnL2dldC1wcm9kdWN0cycsIHRydWUpO1xyXG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJvZHVjdHMgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBkaXNwbGF5UHJvZHVjdHMocHJvZHVjdHMpOyAvLyBkaXNwbGF5IGFsbCBwcm9kdWN0c1xyXG4gICAgfTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvZHVjdHMocHJvZHVjdExpc3QpIHtcclxuICAgIGxldCBodG1sID0gJyc7XHJcbiAgICBwcm9kdWN0TGlzdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1jYXJkXCIgb25jbGljaz1cImxvY2F0aW9uLmhyZWY9J3Byb2R1Y3QtZGV0YWlscy5odG1sP2lkPSR7cHJvZHVjdC5pZH0nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvZHVjdC5pbWFnZX1cIiBhbHQ9XCIke3Byb2R1Y3QubmFtZX1cIiBjbGFzcz1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPiR7cHJvZHVjdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5TJCAke3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWdyaWQnKS5pbm5lckhUTUwgPSBodG1sO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hQcm9kdWN0cyhxdWVyeSkge1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hSZXN1bHRzJyk7XHJcbiAgICBzZWFyY2hSZXN1bHRzLmlubmVySFRNTCA9ICcnOyAvLyBjbGVhciBwcmV2aW91cyByZXN1bHRzXHJcblxyXG4gICAgaWYgKHF1ZXJ5LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICBzZWFyY2hSZXN1bHRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIGlmIHF1ZXJ5IGlzIGVtcHR5LCBoaWRlIHJlc3VsdHNcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IFxyXG4gICAgICAgIHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWFyY2hSZXN1bHRzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGZpbHRlcmVkUHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHQtaXRlbVwiIG9uY2xpY2s9XCJsb2NhdGlvbi5ocmVmPSdwcm9kdWN0LWRldGFpbHMuaHRtbD9pZD0ke3Byb2R1Y3QuaWR9J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9kdWN0LmltYWdlfVwiIGFsdD1cIiR7cHJvZHVjdC5uYW1lfVwiIGNsYXNzPVwicmVzdWx0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN1bHQtbmFtZVwiPiR7cHJvZHVjdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlYXJjaFJlc3VsdHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6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