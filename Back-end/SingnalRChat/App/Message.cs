using System.Collections.Generic;

namespace SingnalRChat.App
{
    // a static "Database", which holds all messages for one session
    public static class MessageHistory{
        public static List<Message> Messages { get; } = new List<Message>();
    }

    public class Message
    {
        public string author { get; set; }
        public string text { get; set; }
    }
}
