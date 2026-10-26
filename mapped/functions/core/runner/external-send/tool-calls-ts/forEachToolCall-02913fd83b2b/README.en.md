# `forEachToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539054-539065](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539054-L539065) | `FunctionDeclaration` | no | `messages, visit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539054-539065](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539054-L539065) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:539054

Calls written directly in this body: `messages.forEach`.

SHA-256 of the source span: `208e6175300e73d553bf09dd960310109da1b08c7b3d69a4abed442ef9cc050c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
