// 只能用 show 方法，没有 show 方法的需要使用适配器进行转换
let renderMap = function (map) {
	if (map.show instanceof Function) {
		map.show();
	}
};

let googleMap = {
	show: function () {
		console.log(`start to render google map...`);
	}
};

let baiduMap = {
	display: function () {
		console.log(`start to render baidu map...`);
	}
};

let gaodeMap = {
	render: function () {
		console.log(`start to render gaode map...`);
	}
};

// baiduMap适配器
let baiduMapAdapter = {
	show: function () {
		return baiduMap.display();
	}
};

// gaodeMap适配器
let gaodeMapAdapter = {
	show: function () {
		return gaodeMap.render();
	}
}

renderMap(googleMap); //start to render google map...
renderMap(baiduMap); //无输出
renderMap(gaodeMap); //无输出
renderMap(baiduMapAdapter); //start to render baidu map...
renderMap(gaodeMapAdapter); //start to render gaode map...