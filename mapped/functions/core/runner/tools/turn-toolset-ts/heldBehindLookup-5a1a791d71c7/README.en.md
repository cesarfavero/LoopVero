# `heldBehindLookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582662-582665](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582662-L582665) | `FunctionDeclaration` | no | `tool, lookupOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582662-582665](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582662-L582665) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582662

Calls written directly in this body: `GROK_BOT_TOOL_ID_BY_MODEL_NAME.get`, `lookupOnly.has`.

SHA-256 of the source span: `3463ff1e92285853c240bc0d4b43161e8e3ae63d4bee491eac80246e811ab2c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
