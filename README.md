# UnreadableStream

UnreadableStream is a joke API like ReadableStream

```ts
import { UnreadableStream } from "https://raw.githubusercontent.com/ayame113/UnreadableStream/main/mod.ts";

const unreadable = new UnreadableStream({
  start(controller) {
    controller.enqueue(1);
  }
});
unreadable.pipeTo(new WritableStream()); // => throw!
unreadable.pipeThrough(new TransformStream()); // => throw!
unreadable.getReader(); // => throw!
unreadable.tee(); // => throw!
```
