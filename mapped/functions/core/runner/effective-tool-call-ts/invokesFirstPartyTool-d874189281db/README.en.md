# `invokesFirstPartyTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/effective-tool-call.ts` · [Module README](../../../../../modules/core/runner/effective-tool-call-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479737-479740](../../../../../../reference/runtime/sand-eval-runner.cjs#L479737-L479740) | `FunctionDeclaration` | no | `part, matches` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479737-479740](../../../../../../reference/runtime/sand-eval-runner.cjs#L479737-L479740) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479737

Calls written directly in this body: `matches`, `resolveEffectiveToolCall`.

SHA-256 of the source span: `3661cf090907f575e1a590b65ad721ce85eabaa37f9b23755a547c347eafadd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
