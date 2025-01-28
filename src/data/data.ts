interface Message{
    messageId: string;
    sender:'user'|'model';
    content: string;
    timestamp: string;
}
 