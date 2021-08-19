function generatePyramid() {
    let n = prompt('combien d\étages veux-tu ?');
    str='';
    
  for(let i=1; i<= n; i++){
   str+=(console.log(' '.repeat(n-i)+'#'.repeat(i)));
    }
}

generatePyramid();
