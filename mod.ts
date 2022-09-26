/**
 * @joke API like ReadableStream, but unreadable.
 *
 * ```ts
 * const unreadable = new UnreadableStream({
 *   start(controller) {
 *     controller.enqueue(1);
 *   }
 * });
 * unreadable.pipeTo(new WritableStream()); // => throw!
 * unreadable.pipeThrough(new TransformStream()); // => throw!
 * unreadable.getReader(); // => throw!
 * unreadable.tee(); // => throw!
 * ```
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
