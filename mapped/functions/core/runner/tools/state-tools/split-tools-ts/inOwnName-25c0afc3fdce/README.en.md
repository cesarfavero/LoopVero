# `inOwnName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771710-771712](../../../../../../../../reference/runtime/host-main.cjs#L771710-L771712) | `FunctionDeclaration` | no | `toolName, result` |
| [evaluation:570943-570945](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570943-L570945) | `FunctionDeclaration` | no | `toolName, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771710-771712](../../../../../../../../reference/runtime/host-main.cjs#L771710-L771712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570943-570945](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570943-L570945) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771710

Calls written directly in this body: `result.replaceAll`.

SHA-256 of the source span: `5d89de0abc01a5d9fcc7cb137a9cf6b2f1bef70950e671b42660ecdc44bf6a40`.

### evaluation:570943

Calls written directly in this body: `result.replaceAll`.

SHA-256 of the source span: `5d89de0abc01a5d9fcc7cb137a9cf6b2f1bef70950e671b42660ecdc44bf6a40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
