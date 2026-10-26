# `decodeConfirmedUserTurnWatermark`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/shell-terminal-watch-watermark.ts` · [Module README](../../../../../modules/core/runner/shell-terminal-watch-watermark-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530062-530085](../../../../../../reference/runtime/sand-eval-runner.cjs#L530062-L530085) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530062-530085](../../../../../../reference/runtime/sand-eval-runner.cjs#L530062-L530085) | 5 | 0 | 0 | 6 | 0 | 1 |

### evaluation:530062

Calls written directly in this body: `.decode`, `JSON.parse`, `fromHex`, `new TextDecoder`, `refPattern.test`, `storedWatermarkSchema.safeParse`.

SHA-256 of the source span: `efc5f5945518ea378ebeae9185c12756f7866d65ebb5e75500718357f4625fc5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
