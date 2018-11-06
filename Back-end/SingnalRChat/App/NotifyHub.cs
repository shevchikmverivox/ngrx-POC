using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SingnalRChat.App
{
    public class NotifyHub : Hub
    {
        public Task Send(Message data)
        {
            MessageHistory.Messages.Add(data);
            return Clients.All.SendAsync("Send", data);
        }
    }
}
