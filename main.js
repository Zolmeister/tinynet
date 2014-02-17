a.style.width=160+'px'
a.style.height=200+'px'
a.width=16
a.height=20

c.fillRect(0,0,200,200)

onmouseup = onmousemove = function(e) {
    c.fillStyle='#fff'
    if(e.which) {
        c.fillRect(e.pageX/10|0, e.pageY/10|0, 1, 1)
        return
    }

    //function calc() {
        data = c.getImageData(0,0,16,20).data
        i = data.length + 4
        out = []
        while(i-=4) {
            out.push(!data[i]?0:1)
        }

        //console.log(JSON.stringify(out.reduce(function(s, v){!v?s.b++ : s.w++;return s}, {w:0,b:0})))
        // NN code here
        ans = 1
        //alert(ans)
    //}

    c.fillStyle='#000'
    c.fillRect(0,0,200,200)

}
