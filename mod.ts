/**
 * @joke API like ReadableStream, but unreadable.
 */
export class UnreadableStream<R> extends ReadableStream<R> {
  getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
  getReader(
    options?: { mode?: undefined } | undefined,
  ): ReadableStreamDefaultReader<R>;
  getReader(
    _options?: unknown,
  ): ReadableStreamBYOBReader | ReadableStreamDefaultReader<R> {
    throw new Error("UnreadableStream is unreadable.");
  }
  pipeTo(
    _dest: WritableStream<R>,
    _options?: PipeOptions | undefined,
  ): Promise<void> {
    throw new Error("UnreadableStream is unreadable.");
  }
  pipeThrough<T>(
    { writable: _writable, readable: _readable }: {
      writable: WritableStream<R>;
      readable: ReadableStream<T>;
    },
    _options?: PipeOptions | undefined,
  ): ReadableStream<T> {
    throw new Error("UnreadableStream is unreadable.");
  }
  tee(): [ReadableStream<R>, ReadableStream<R>] {
    throw new Error("UnreadableStream is unreadable.");
  }
}
