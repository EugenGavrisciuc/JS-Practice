"use strict";

let a = [4, 2, 5, 1],
    i = 0, x, y, j = 0;

for (j=0; j<a.length;j++)
{
    for(i=0; i<a.length;i++)
    {
        if(a[i]>a[i+1])
        {
            x=a[i];
            y=a[i+1];
            a[i]=y;
            a[i+1]=x;
        }
    }
}
console.log(a);
