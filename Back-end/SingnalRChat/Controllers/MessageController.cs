using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SingnalRChat.App;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SingnalRChat.Controllers
{
    [Route("api/message")]
    [Produces("application/json")]
    public class MessageController : Controller
    {
        [HttpGet]
        public List<Message> Get()
        {
            return MessageHistory.Messages;
        }

        [HttpDelete]
        public void Clear()
        {
            MessageHistory.Messages.Clear();
        }
    }
}
