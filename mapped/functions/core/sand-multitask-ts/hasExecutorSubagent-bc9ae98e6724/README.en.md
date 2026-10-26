# `hasExecutorSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752229-752233](../../../../../reference/runtime/host-main.cjs#L752229-L752233) | `FunctionDeclaration` | no | `configs` |
| [evaluation:530192-530196](../../../../../reference/runtime/sand-eval-runner.cjs#L530192-L530196) | `FunctionDeclaration` | no | `configs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752229-752233](../../../../../reference/runtime/host-main.cjs#L752229-L752233) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530192-530196](../../../../../reference/runtime/sand-eval-runner.cjs#L530192-L530196) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752229

Calls written directly in this body: `configs.some`.

SHA-256 of the source span: `b681a84fae2061861571b227a7c98873fd92061a6c91d35b7505453b753aed5e`.

### evaluation:530192

Calls written directly in this body: `configs.some`.

SHA-256 of the source span: `b681a84fae2061861571b227a7c98873fd92061a6c91d35b7505453b753aed5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
