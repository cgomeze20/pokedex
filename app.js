

const input = document.getElementById('searchpoke')
const foto = document.querySelector('.pokemon')


input.addEventListener('keypress',async(e)=>{
    const foto = document.querySelector('.pokemon')
    const comentario = document.querySelector('.comentario')
    let ctx = document.getElementById('myChart').getContext('2d');
    let color = Chart.helpers.color;

    if(e.key === 'Enter' ){

        try {
            foto.setAttribute('src','img/pokebola.png')

            let nombre = e.target.value.toLowerCase()

            const api = `https://pokeapi.co/api/v2/pokemon/${nombre}`
            res = await fetch(api)
            json = await res.json()

            foto.src = `${json.sprites.front_default}`;
            foto.classList.remove('rotar')

              // START ESPACIO PARA CHART
              let hp = json.stats[0].base_stat;
              let attack = json.stats[1].base_stat;
              let defense = json.stats[2].base_stat;
              let special_attack = json.stats[3].base_stat;
              let special_defense = json.stats[4].base_stat;
              let speed = json.stats[5].base_stat;
  
                  
                 if(window.chart != undefined)
                 window.chart.destroy();
                  window.chart = new Chart(ctx, {
                      //Tipo de linea
                      type: 'radar',
                      data: {
                          labels: ['Speed','Special Defense','Special Attack','Attack','HP'],
                          datasets: [{
                              label: '',
                              data: [speed,special_defense,special_attack,attack,hp],
                              borderColor:'#FF8A65',
                              backgroundColor:'rgba(255,138,101,0.2)',
                              pointBackgroundColor:'#FF8A65',
                              borderWidth:2,
                              strokeColor: "rgba(151,187,205,1)",
                              pointBorderColor: "rgba(0,0,0,1)"
                            }]
                        },
                        options: {
                            legend: {
                                display:false,
                              position: 'bottom',
                              labels: {
                                fontColor: 'white'
                              }
                            },
                            title: {
                              display: false,
                              text: 'Stats',
                              fontColor: 'white'
                            },
                            scale: {
                              ticks: {
                                beginAtZero: true,
                                fontColor: 'white', // labels such as 10, 20, etc
                                showLabelBackdrop: false // hide square behind text
                              },
                              pointLabels: {
                                fontColor: 'white',// labels around the edge like 'Running'
                                font: 14
                              },
                              gridLines: {
                                color: 'rgba(255, 255, 255, 0.2)'
                              },
                              angleLines: {
                                color: 'white' // lines radiating from the center
                              }
                            }
                          }

                    })
               
                    // chart.update()
              // Espacio para el CHART END

        } catch (error) {
            console.log('error');
            foto.src = 'img/error.png'
            foto.classList.remove('rotar')
            chart.destroy();
        }
    }
    
})

