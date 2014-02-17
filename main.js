with(a.style) {
 width=160+'px'
 height=200+'px'
 border='2px solid'
}

a.width=16
a.height=20

//c.fillRect(0,0,200,200)

onmouseup = onmousemove = function(e) {

    if(e.which) return c.fillRect(e.pageX/10|0, e.pageY/10|0, 1, 1)


    //function calc() {
        data = c.getImageData(0,0,16,20).data
        i = data.length + 4
        input = []
        while(i-=4) {
            input.push(!data[i]?0:1)
        }

        //console.log(JSON.stringify(out.reduce(function(s, v){!v?s.b++ : s.w++;return s}, {w:0,b:0})))
        // NN code here

        //input = [123,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789,456,789,123,456,789]

        // first hidden layer is 320 x 15


        ans = 1
        //alert(ans)
    //}

    //c.clearRect(0,0,20,20)
    a.width=16

}
