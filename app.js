var searchTerm ;
var number;
var startYear = 1900;
var endYear = 2017;

$("#runSearch").on("click", function run(event){
   event.preventDefault();
   searchTerm = $("#searchTerm").val();
   console.log(searchTerm);
   number = $("select#numRecordsSelect").val();
   console.log(number);
   startYear = $("#startYear").val();
   console.log(startYear + "0101");
   endYear = $("#endYear").val();
   console.log(endYear + "1231");

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "4a800a1ae72b4b7e98bea37fbf045222",
 'q': searchTerm,
 'begin_date':startYear +"0101",
 'end_date': endYear + "1231",
 'fl': number
});
$.ajax({
 url: url,
 method: 'GET',
}).then(function(result){
console.log(result);



})