# `createSandEvalInference`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [sand-eval-runner.cjs:597549–597577](../../../reference/runtime/sand-eval-runner.cjs#L597549-L597577).

**Component:** [inference](../../components/inference/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Provide the inference ports used by the evaluation runner, with the backend and identity supplied through injection.

## Input

`options` contains the backend, token/team/machine getters, model selection, and request context. The factory does not discover credentials on the desktop by itself.

## Output

| Method | Result |
| --- | --- |
| `resolvePrivacyMode` | Resolves privacy policy using backend options. |
| `getGeminiVideoAttachedMediaUrlProvider` | Returns an attached-media URL provider. |
| `createSession` | Builds a prompt session with a request ID callback and options. |

## Model selection

If the session requests a `modelId` different from the main one, it uses `createSandSubagentRequestedModel`. Otherwise, it uses the main selection with `maxMode` and parameters. Forwards `inferenceReason`, `modelConfig`, context, and lineage when present.

## Concrete connection

The eval's `main` instantiates this factory at [sand-eval-runner.cjs:630767–630775](../../../reference/runtime/sand-eval-runner.cjs#L630767-L630775) and passes it to `runSandEvalRequest`. The main session is consumed by the run shell at [592061–592096](../../../reference/runtime/sand-eval-runner.cjs#L592061-L592096).

## Boundary

The output depends on `InferenceService` and media/privacy services. The recovered adapter is not a standalone replacement compatible with any model API. Internal server policy and the model actually served remain outside this function.
