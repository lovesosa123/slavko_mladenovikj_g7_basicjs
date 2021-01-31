function tellStory(name,mood,activity) {
        alert(`Here in our story we have ${name}. ${name} is feeling ${mood} today because ${name} is ${activity}.`)
}

tellStory(prompt(`Please enter your character's name`), prompt(`Please enter your character's mood`), prompt(`Please enter what your character is doing`))