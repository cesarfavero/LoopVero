# `FirstStreamMessageSnapshotMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/first-stream-message-snapshot-middleware.ts` · [Module README](../../../../../modules/core/runner/first-stream-message-snapshot-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586429-586435](../../../../../../reference/runtime/sand-eval-runner.cjs#L586429-L586435) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586429-586435](../../../../../../reference/runtime/sand-eval-runner.cjs#L586429-L586435) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586429

Calls written directly in this body: `this.capture`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

Assignment or increment targets: `this.captured`.

SHA-256 of the source span: `95e81a4c9dc40690b7338e80b4f8ac77d7c0de93819a7377bdeab1f1f997a08b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
