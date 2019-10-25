/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function calculateAverageMovieRate(arr) {
   let average = arr.map(el => el.rate);
   //console.log(average);

    let sum = 0;
    for (let i = 0; i < average.length; i++){
      sum = sum + average[i];
    }
    return (sum / arr.length);
  }
  console.log(calculateAverageMovieRate(MOVIES));


//console.log(calculateAverageMovieRate(MOVIES));

// Iteration 2: Drama movies - Get the average of Drama Movies
function calculateAverageDramaRate (drama){
    let dramaMovies = drama.filter((movie) => {
        if (movie.genre[0].toLowerCase() === 'drama'){
            return true
        } 
    });

        if (dramaMovies.length === 0) {
            return 0
        } else {
            return calculateAverageMovieRate(dramaMovies);
        }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(someArr){
    const order = someArr.sort((a, b) => a.year > b.year ? 1 : -1)
    return order;
}

// =======ASK ABOUT WHY NOT SHOWING ABOUT THE YEARS BEING THE SAME=======///

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies(steve) {
    let moviesBySteven = steve.filter((movie) => {
        for (let i = 0; i < movie.genre.length; i++)
        if (movie.genre[i].toLowerCase() === 'drama'){
            return true
        }});

        const steveActual = moviesBySteven.filter((movie => movie.director === 'Steven Spielberg'));

        return steveActual.length;
    }
console.log(countSpielbergDramaMovies(MOVIES));

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let movieTitles = arr.map(movie => movie.title);
    const alpha = movieTitles.sort((a, b) => a > b ? 1 : -1).slice(0, 20);
    return alpha;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieLength) {
        const total = movieLength.map((value, index, originalArray) => {
        return {duration: value.duration};
      });
//console.log(total);
      const minsArray = total.map((value, index, originalArray) => {
          let totalMin = 0;
          let durationSplit = value.duration.split(' ');
          //console.log("split", durationSplit);
          for (let i = 0; i < durationSplit.length; i++){
              if(durationSplit[i].includes('h')){
                  totalMin += parseInt(durationSplit[i])*60;
              } else {
                  totalMin += parseInt(durationSplit[i]);
              }
          }
          return {duration: totalMin};

      });

      console.log("HERE",minsArray);

        // let parsed = parseInt('h');
        // if (isNaN(parsed)) { return 0 }
        // return parsed * 60;
      return minsArray;
}

console.log(turnHoursToMinutes(MOVIES));


// BONUS Iteration: Best yearly rate average - Best yearly rate average
//function bestYearAvg(arr) {
    // let averageYear = arr.map(el => el.rate);
    // let titles = arr.map(movie => movie.title)

    // let total = averageYear[0] + titles[0];
    // return total;
//     const total = arr.map(value, index, originalArray) {

//     }
//    }

// console.log(bestYearAvg(MOVIES));