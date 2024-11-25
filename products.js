/*nl e kolekcija od DOM(document object model)
document.addEventListener('DOMContentLoaded', (event) => {   //funkcija koja kje se izvrsi koga nstanot kje se sluci(event go sodrzi objektot)
    const likeButtons = document.querySelectorAll('.like-btn');     //deklarirame promenlive likebuttons
  //qS e metod koj gi selektira site elementi od kodot koi imaat class = like.btn i vakja nodeListe od site selektirani elementi
    likeButtons.forEach(button => {   //ciklus 
      button.addEventListener('click', function() {        //dodava siusatel na nstani za koga kje se klikne kopceto
        const likeCount = this.querySelector('.like-count');    //tuka so qS se brojat lajkovite
        let count = parseInt(likeCount.textContent);  //so let deklarirame primenliva cija vredmost moze da se promeni
        likeCount.textContent = ++count;
      });
    });
  
  
  submitCommentButtons.forEach(button => {
      button.addEventListener('click', function() {
        const commentInput = document.querySelector('.comment-input');
        const commentText = commentInput.value.trim();
        if (commentText) {
          const cardBody = this.closest('.modal').previousElementSibling.querySelector('.card-body');
          const commentsList = cardBody.querySelector('.comments-list');
          const newComment = document.createElement('li');
          newComment.textContent = commentText;
          commentsList.appendChild(newComment);
          commentInput.value = ''; // Исчисти го текстот по поднесување
          $('#commentModal').modal('hide'); // Затвори го модалот
        }
      });
    });
  });*/

  document.addEventListener('DOMContentLoaded', (event) => {
    // Наоѓање на сите копчиња со класа like-btn
    const likeButtons = document.querySelectorAll('.like-btn');
    
    // Додавање на слушател на настани за секое копче like-btn
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Наоѓање на елементот со класа like-count внатре во тековното копче
            const likeCount = this.querySelector('.like-count');
            // Претворање на текстуалната содржина на like-count во цел број
            let count = parseInt(likeCount.textContent);
            // Зголемување на бројот на лајкови за 1
            likeCount.textContent = ++count;
        });
    });

    // Наоѓање на сите копчиња за поднесување коментар со класа submit-comment-btn
    const submitCommentButtons = document.querySelectorAll('.submit-comment-btn');

    // Додавање на слушател на настани за секое копче submit-comment-btn
    submitCommentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Наоѓање на елементот за внесување на коментар со класа comment-input
            const commentInput = document.querySelector('.comment-input');
            // Преземање на текстуалната вредност и отстранување на празните простори на почетокот и крајот
            const commentText = commentInput.value.trim();
            if (commentText) {
                // Наоѓање на телото на картичката каде што е поднесен коментарот
                const cardBody = this.closest('.modal').previousElementSibling.querySelector('.card-body');
                // Наоѓање на листата на коментари внатре во телото на картичката
                const commentsList = cardBody.querySelector('.comments-list');
                // Создавање на нов елемент за листа со текстот на коментарот
                const newComment = document.createElement('li');
                newComment.textContent = commentText;
                // Додавање на новиот коментар во листата на коментари
                commentsList.appendChild(newComment);
                // Исчисти го текстот по поднесување
                commentInput.value = '';
                // Затвори го модалот
                $('#commentModal').modal('hide');
            }
        });
    });
});
