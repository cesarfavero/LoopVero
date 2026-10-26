# `createCursorInferencePromptSession`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [sand-eval-runner.cjs:597538–597547](../../../reference/runtime/sand-eval-runner.cjs#L597538-L597547).

**Component:** [inference](../../components/inference/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Convert harness options into a prompt session that uses the original inference protocol.

## Complete algorithm

1. Create an `InferenceService` client with `createSandCursorBackendClient`.
2. Create `ProtoSessionProvider` with the client, requested model, configuration, and inference reason.
3. Obtain a session with `imageResizingWithContentHashMiddleware`.

This is a small composition function. Streaming work belongs to the provider/executor; the agent loop belongs to the runner.

## Inputs and dependencies

Receives authenticated options through getters, context, and model identity. It does not open a local model or load weights. The image middleware operates on the session; the media URL factory is a separate dependency of `createSandEvalInference`.

## Output

The prompt session is consumed by runner wrappers that observe the served model, usage, prefixes, and deadlines. In the underlying executor, `client.stream` produces events and metadata Promises, as shown in [sand-eval-runner.cjs:494620–494725](../../../reference/runtime/sand-eval-runner.cjs#L494620-L494725).

## What remains external

The function allows the RPC boundary to be named precisely. It does not contain the backend that selects a provider, runs a model, or decides internal routing. It was not called during this research.
