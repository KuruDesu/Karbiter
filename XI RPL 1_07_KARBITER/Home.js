function toggleTable(tableId){
    const table = document.getElementById(tableId);
    const button = table.previousElementSibling;
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}

function preventBack(){window.history.forward();}
setTimeout("preventBack()", 0);
window.onunload=function(){null};

document.getElementById('addbutton1').addEventListener('click',function() {
    const newbutton1 = document.getElementById('newbutton1');
    if (newbutton1.style.display === 'none') {
        newbutton1.style.display = 'block';
    } else {
        newbutton1.style.display = 'none';
    }

});

let isPortofolioShown = false;
    const Data1 = document.getElementById('table1').innerHTML;

    function portofolio1() {
        const table = document.getElementById('table1');
        const button = document.getElementById('newbutton1');
        
        if (isPortofolioShown) {
            table.innerHTML = Data1;
            button.innerHTML = "Portofolio";

        } else {

            table.innerHTML = `
                <p>Saya Angga, programmer pemula.</p>
                <p>Skill saya meliputi: HTML, CSS, JavaScript, Saya bercita-cita menjadi Web Developer 
                yang handal dengan terus mengasah kemampuan saya dalam pengembangan web dan desain grafis.</p>
            `;
            button.innerHTML = "Tabel";
        }
        
        isPortofolioShown = !isPortofolioShown;
    }

    document.getElementById('addbutton2').addEventListener('click',function() {
        const newbutton1 = document.getElementById('newbutton2');
        if (newbutton1.style.display === 'none') {
            newbutton1.style.display = 'block';
        } else {
            newbutton1.style.display = 'none';
        }
    
    });
    
        const Data2 = document.getElementById('table2').innerHTML;
    
        function portofolio2() {
            const table = document.getElementById('table2');
            const button = document.getElementById('newbutton2');
            
            if (isPortofolioShown) {
                table.innerHTML = Data2;
                button.innerHTML = "Portofolio";
    
            } else {
    
                table.innerHTML = `
                    <p>Saya Indra, programmer.</p>
                    <p>Skill saya meliputi: HTML, CSS, JavaScript, Saya bercita-cita menjadi Web Developer 
                    yang handal dengan terus mengasah kemampuan saya dalam pengembangan web dan desain grafis.</p>
                `;
                button.innerHTML = "Tabel";
            }
            
            isPortofolioShown = !isPortofolioShown;
        }

        document.getElementById('addbutton3').addEventListener('click',function() {
            const newbutton1 = document.getElementById('newbutton3');
            if (newbutton1.style.display === 'none') {
                newbutton1.style.display = 'block';
            } else {
                newbutton1.style.display = 'none';
            }
        
        });
        
            const Data3 = document.getElementById('table3').innerHTML;
        
            function portofolio3() {
                const table = document.getElementById('table3');
                const button = document.getElementById('newbutton3');
                
                if (isPortofolioShown) {
                    table.innerHTML = Data3;
                    button.innerHTML = "Portofolio";
        
                } else {
        
                    table.innerHTML = `
                        <p>Saya Ardha, programmer pemula.</p>
                        <p>Skill saya meliputi: HTML, CSS, JavaScript, Saya bercita-cita menjadi Web Developer 
                        yang handal dengan terus mengasah kemampuan saya dalam pengembangan web dan desain grafis.</p>
                    `;
                    button.innerHTML = "Tabel";
                }
                
                isPortofolioShown = !isPortofolioShown;
            }