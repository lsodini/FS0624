function addTask() {
    // Prendi il valore dell'input
    let taskInput = document.getElementById('task'); // Ottiene l'elemento input con id "task"
    let taskText = taskInput.value.trim(); // Ottiene il testo inserito nell'input e rimuove eventuali spazi vuoti all'inizio e alla fine

    // Verifica se l'input è vuoto
    if (taskText === '') {
        alert('Per favore, inserisci un task.'); // Mostra un alert se l'input è vuoto
        return; // Esce dalla funzione se l'input è vuoto
    }

    // Crea un nuovo div per il task
    let taskItem = document.createElement('div'); // Crea un nuovo elemento div
    taskItem.className = 'taskItem'; // Assegna la classe 'taskItem' al nuovo div

    // Crea l'elemento p per il testo del task
    let taskPara = document.createElement('p'); // Crea un nuovo elemento p
    taskPara.textContent = taskText; // Imposta il testo del paragrafo con il testo del task inserito

    // Aggiungi un evento al div del task per barrare il testo quando viene cliccato
    taskItem.addEventListener('click', function () {
        taskPara.classList.toggle('completed'); // Alterna la classe 'completed' sul paragrafo quando il div del task viene cliccato
    });

    // Crea il pulsante di eliminazione
    let deleteBtn = document.createElement('button'); // Crea un nuovo elemento button
    deleteBtn.className = 'deleteBtn'; // Assegna la classe 'deleteBtn' al pulsante di eliminazione
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>'; // Aggiunge un'icona di eliminazione come contenuto HTML del pulsante

    // Aggiungi un evento al pulsante di eliminazione per rimuovere il task
    deleteBtn.addEventListener('click', function () {
        taskItem.remove(); // Rimuove il div del task quando il pulsante di eliminazione viene cliccato
    });

    // Aggiungi il paragrafo del task e il pulsante di eliminazione al div del task
    taskItem.appendChild(taskPara); // Aggiunge il paragrafo al div del task
    taskItem.appendChild(deleteBtn); // Aggiunge il pulsante di eliminazione al div del task

    // Aggiungi il nuovo task alla lista dei task
    document.getElementById('taskList').appendChild(taskItem); // Aggiunge il div del task al contenitore con id 'taskList' nella pagina HTML

    // Svuota l'input dopo aver aggiunto il task
    taskInput.value = ''; // Svuota l'input dell'elemento con id 'task'
}