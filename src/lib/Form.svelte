<script>
    function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
  }
</script>
    <form action="https://savedata.testuser170997.workers.dev/submit" method="post" on:submit|preventDefault={onSubmit}>
        <div class="flex my-2">
            <label for="first_name">First name</label>
            <input type="text" name="first_name" id="first_name" placeholder="Ellen" class="w-full p-2 border focus:outline-none" />
          </div>
        
          <div class="flex my-2">
            <label for="last_name">Last name</label>
            <input type="text" name="last_name" id="last_name"  placeholder="last" class="w-full p-2 border focus:outline-none" />
          </div>
        
          <div class="flex my-2" >
            <label for="email">Email</label>
              <input id="email" name="email" type="email" placeholder="mail" class="w-full p-2 border focus:outline-none" />
            </div>
        
          <div class="flex my-2">
            <label for="phone">
              Phone
            </label>
            <input type="text" name="phone" id="phone" placeholder="phone" class="w-full p-2 border focus:outline-none"/>
          </div>
        
          <div class="flex my-2">
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Your example subject" class="w-full p-2 border focus:outline-none"/>
          </div>
        
          <div class="flex my-2">
            <label for="message">
              Message
            </label>
            <textarea id="message" name="message" rows="4" placeholder="msg" class="w-full p-2 border focus:outline-none"></textarea>
          </div>
        
          <div class="flex items-center my-2">
            <button type="submit" class="w-full p-2 border focus:outline-none">
              Submit
            </button>
          </div>
    </form>

