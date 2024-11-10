import * as signalR from "@microsoft/signalr";
const url = "https://pwabrd.labsystec.net/hub"; // URL del servidor SignalR

const connection = new signalR.HubConnectionBuilder()
  .withUrl(url, {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .withAutomaticReconnect()
  .build();

export default connection;
