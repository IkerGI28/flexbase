const datubasea = [
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]

  let argazkiak = ["https://covers.openlibrary.org/b/id/"+datubasea[0].filename, "https://covers.openlibrary.org/b/id/"+datubasea[1].filename, "https://covers.openlibrary.org/b/id/"+datubasea[2].filename, "https://covers.openlibrary.org/b/id/"+datubasea[3].filename]
  
  let unekoindex = 0;

  let argazkia = document.getElementById("liburuaren-irudia");
  let izenburua = document.getElementById("izenburua")
  let egilea = document.getElementById("egilea")
  let isbn = document.getElementById("isbn")
  let data = document.getElementById("data")
  let aurrekoa_botoia = document.getElementById("aurrekoa")
  let hurrengoa_botoia = document.getElementById("hurrengoa")

  let argazkiaeguneratu = () => {
    argazkia.src = argazkiak[unekoindex];
    izenburua.value = datubasea[unekoindex].izenburua;
    egilea.value = datubasea[unekoindex].egilea;
    isbn.value = datubasea[unekoindex].isbn;
    data.value = datubasea[unekoindex].data;
  }

  argazkiaeguneratu();

  let hurrengoargazkiaerakutsi = (event) => {
    event.preventDefault();
    if(unekoindex < argazkiak.length - 1){
      unekoindex = unekoindex + 1;
      argazkiaeguneratu();
    }
  }

  let aurrekoargazkiaerakutsi = (event) => {
    event.preventDefault();
    if(unekoindex > 0){
      unekoindex = unekoindex - 1;
      argazkiaeguneratu();
    }
  }

aurrekoa_botoia.onclick = aurrekoargazkiaerakutsi;
hurrengoa_botoia.onclick = hurrengoargazkiaerakutsi;