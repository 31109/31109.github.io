// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 2, dy = 2, i = 0, N = 10;

// 預載走路圖片
let walk = [];
for(let i = 0; i < N; ++i)
{
	walk[i] = new Image();
	walk[i].src = "img/Attack(" + i + ").png";
}

// 預載反向走路圖片
let rwalk = [];
for(let i = 0; i < N; ++i)
{
	rwalk[i] = new Image();
	rwalk[i].src = "rimg/Attack(" + i + ").png";
}

// 貼上圖片
function drawImg() 
{    
	// parseInt(i/2) 讓兩時間格共用一張圖片，以讓動作更換不要過於頻繁
	// 編號 i：0, 1, 2, 3, 4, 5, 6, 7, ...
	// 對應圖：0, 0, 1, 1, 2, 2, 3, 3, ...
    if(dx > 0)   	ctx.drawImage(walk[parseInt(i/2)%N], x, y, 150, 180);
    else          	ctx.drawImage(rwalk[parseInt(i/2)%N], x, y, 150, 180);
}

// 更新畫布
function draw() 
{	
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    x += dx;
    y += dy;
    ++i;

    if(x < 0 || x+150 > canvas.width)     dx = -dx;
    if(y < 0 || y+150 > canvas.height)    dy = -dy;
    
    drawImg();
    requestAnimationFrame(draw);
}
draw();