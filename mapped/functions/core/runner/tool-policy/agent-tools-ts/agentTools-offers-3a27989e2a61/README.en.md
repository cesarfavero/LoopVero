# `agentTools/offers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756582-756582](../../../../../../../reference/runtime/host-main.cjs#L756582-L756582) | `ArrowFunctionExpression` | no | `tool` |
| [evaluation:542502-542502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542502-L542502) | `ArrowFunctionExpression` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756582-756582](../../../../../../../reference/runtime/host-main.cjs#L756582-L756582) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:756582 uses an implicit arrow-function return.
| [evaluation:542502-542502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542502-L542502) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:542502 uses an implicit arrow-function return.

### host:756582

Calls written directly in this body: `offered.has`.

SHA-256 of the source span: `cde097a489df2486253af0a17eebae57abbd5e5160a025785c32002448f04e4a`.

### evaluation:542502

Calls written directly in this body: `offered.has`.

SHA-256 of the source span: `cde097a489df2486253af0a17eebae57abbd5e5160a025785c32002448f04e4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
