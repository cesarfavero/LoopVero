# `resolveEffectiveToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/effective-tool-call.ts` · [Module README](../../../../../modules/core/runner/effective-tool-call-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479719-479736](../../../../../../reference/runtime/sand-eval-runner.cjs#L479719-L479736) | `FunctionDeclaration` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479719-479736](../../../../../../reference/runtime/sand-eval-runner.cjs#L479719-L479736) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:479719

Calls written directly in this body: `isReservedDynamicToolsNamespace`, `parseDynamicInvocationArgs`, `parseNestedNativeToolArguments`.

SHA-256 of the source span: `9d5cd2c57b00f320cea6c1ca888106de76aed1836d47dbf9f2aeadde92b5818a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
