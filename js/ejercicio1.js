const meses = [`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`dicembre`];
document.write(` los 12 meses del año son: `)
document.write('<ul>');
for(let i=0; i < meses.length; i++){
    document.write(`<li>${meses[i]}</li>`);
}
document.write('</ul>');