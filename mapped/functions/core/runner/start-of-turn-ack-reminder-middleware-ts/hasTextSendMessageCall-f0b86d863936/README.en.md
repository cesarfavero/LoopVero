# `hasTextSendMessageCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/start-of-turn-ack-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/start-of-turn-ack-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587028-587038](../../../../../../reference/runtime/sand-eval-runner.cjs#L587028-L587038) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587028-587038](../../../../../../reference/runtime/sand-eval-runner.cjs#L587028-L587038) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587028

Calls written directly in this body: `message.content.some`.

SHA-256 of the source span: `fb7683db5274a150eac4d4f4a6c7262c4be42d45e60419042c77dd27f0d90a22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
