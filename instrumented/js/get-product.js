function cov_2k0nyssof8(){var path="C:\\Users\\User\\Downloads\\DevOps_Part_II\\foundry-store-mgmt\\public\\js\\get-product.js";var hash="7f53c0a4eb75ce350ec9e490075d467ee007592f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\User\\Downloads\\DevOps_Part_II\\foundry-store-mgmt\\public\\js\\get-product.js",statementMap:{"0":{start:{line:2,column:19},end:{line:2,column:21}},"1":{start:{line:3,column:18},end:{line:3,column:38}},"2":{start:{line:4,column:4},end:{line:4,column:47}},"3":{start:{line:5,column:4},end:{line:5,column:65}},"4":{start:{line:6,column:4},end:{line:20,column:6}},"5":{start:{line:7,column:8},end:{line:7,column:52}},"6":{start:{line:8,column:19},end:{line:8,column:21}},"7":{start:{line:9,column:8},end:{line:18,column:9}},"8":{start:{line:9,column:21},end:{line:9,column:22}},"9":{start:{line:10,column:12},end:{line:17,column:24}},"10":{start:{line:19,column:8},end:{line:19,column:65}},"11":{start:{line:21,column:4},end:{line:21,column:19}}},fnMap:{"0":{name:"getProducts",decl:{start:{line:1,column:9},end:{line:1,column:20}},loc:{start:{line:1,column:23},end:{line:22,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:6,column:21},end:{line:6,column:22}},loc:{start:{line:6,column:33},end:{line:20,column:5}},line:6}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},f:{"0":0,"1":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7f53c0a4eb75ce350ec9e490075d467ee007592f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2k0nyssof8=function(){return actualCoverage;};}return actualCoverage;}cov_2k0nyssof8();function getProducts(){cov_2k0nyssof8().f[0]++;var response=(cov_2k0nyssof8().s[0]++,'');var request=(cov_2k0nyssof8().s[1]++,new XMLHttpRequest());cov_2k0nyssof8().s[2]++;request.open('GET','/get-products',true);cov_2k0nyssof8().s[3]++;request.setRequestHeader('Content-Type','application/json');cov_2k0nyssof8().s[4]++;request.onload=function(){cov_2k0nyssof8().f[1]++;cov_2k0nyssof8().s[5]++;response=JSON.parse(request.responseText);var html=(cov_2k0nyssof8().s[6]++,'');cov_2k0nyssof8().s[7]++;for(var i=(cov_2k0nyssof8().s[8]++,0);i<response.length;i++){cov_2k0nyssof8().s[9]++;html+=`
                <div class="product-card" onclick="location.href='product-details.html?id=${response[i].id}'">
                    <img src="${response[i].image}" alt="${response[i].name}" class="product-image">
                    <div class="product-details">
                        <p class="product-name">${response[i].name}</p>
                        <p class="product-price">S$ ${response[i].price}</p>
                    </div>
                </div>`;}cov_2k0nyssof8().s[10]++;document.querySelector('.product-grid').innerHTML=html;};cov_2k0nyssof8().s[11]++;request.send();}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmswbnlzc29mOCIsImFjdHVhbENvdmVyYWdlIiwiZ2V0UHJvZHVjdHMiLCJmIiwicmVzcG9uc2UiLCJzIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJodG1sIiwiaSIsImxlbmd0aCIsImlkIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzZW5kIl0sInNvdXJjZXMiOlsiZ2V0LXByb2R1Y3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XHJcbiAgICB2YXIgcmVzcG9uc2UgPSAnJztcclxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsICcvZ2V0LXByb2R1Y3RzJywgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIHZhciBodG1sID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWNhcmRcIiBvbmNsaWNrPVwibG9jYXRpb24uaHJlZj0ncHJvZHVjdC1kZXRhaWxzLmh0bWw/aWQ9JHtyZXNwb25zZVtpXS5pZH0nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3BvbnNlW2ldLmltYWdlfVwiIGFsdD1cIiR7cmVzcG9uc2VbaV0ubmFtZX1cIiBjbGFzcz1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+JHtyZXNwb25zZVtpXS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCI+UyQgJHtyZXNwb25zZVtpXS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ncmlkJykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH07XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufSJdLCJtYXBwaW5ncyI6IjBwREFlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixRQUFTLENBQUFFLFdBQVdBLENBQUEsQ0FBRyxDQUFBRixjQUFBLEdBQUFHLENBQUEsTUFDbkIsR0FBSSxDQUFBQyxRQUFRLEVBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFHLEVBQUUsRUFDakIsR0FBSSxDQUFBQyxPQUFPLEVBQUFOLGNBQUEsR0FBQUssQ0FBQSxNQUFHLEdBQUksQ0FBQUUsY0FBYyxDQUFDLENBQUMsRUFBQ1AsY0FBQSxHQUFBSyxDQUFBLE1BQ25DQyxPQUFPLENBQUNFLElBQUksQ0FBQyxLQUFLLENBQUUsZUFBZSxDQUFFLElBQUksQ0FBQyxDQUFDUixjQUFBLEdBQUFLLENBQUEsTUFDM0NDLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsY0FBYyxDQUFFLGtCQUFrQixDQUFDLENBQUNULGNBQUEsR0FBQUssQ0FBQSxNQUM3REMsT0FBTyxDQUFDSSxNQUFNLENBQUcsVUFBWSxDQUFBVixjQUFBLEdBQUFHLENBQUEsTUFBQUgsY0FBQSxHQUFBSyxDQUFBLE1BQ3pCRCxRQUFRLENBQUdPLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixPQUFPLENBQUNPLFlBQVksQ0FBQyxDQUMzQyxHQUFJLENBQUFDLElBQUksRUFBQWQsY0FBQSxHQUFBSyxDQUFBLE1BQUcsRUFBRSxFQUFDTCxjQUFBLEdBQUFLLENBQUEsTUFDZCxJQUFLLEdBQUksQ0FBQVUsQ0FBQyxFQUFBZixjQUFBLEdBQUFLLENBQUEsTUFBRyxDQUFDLEVBQUVVLENBQUMsQ0FBR1gsUUFBUSxDQUFDWSxNQUFNLENBQUVELENBQUMsRUFBRSxDQUFFLENBQUFmLGNBQUEsR0FBQUssQ0FBQSxNQUN0Q1MsSUFBSSxFQUFJO0FBQ3BCLDRGQUE0RlYsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0UsRUFBRTtBQUMxRyxnQ0FBZ0NiLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDLENBQUNHLEtBQUssVUFBVWQsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0ksSUFBSTtBQUMzRTtBQUNBLGtEQUFrRGYsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0ksSUFBSTtBQUNsRSxzREFBc0RmLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDLENBQUNLLEtBQUs7QUFDdkU7QUFDQSx1QkFBdUIsQ0FDZixDQUFDcEIsY0FBQSxHQUFBSyxDQUFBLE9BQ0RnQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsU0FBUyxDQUFHVCxJQUFJLENBQzVELENBQUMsQ0FBQ2QsY0FBQSxHQUFBSyxDQUFBLE9BQ0ZDLE9BQU8sQ0FBQ2tCLElBQUksQ0FBQyxDQUFDLENBQ2xCIiwiaWdub3JlTGlzdCI6W119