# `createComputerUseCoordination/recordAuditIntent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525482-525487](../../../../../../reference/runtime/sand-eval-runner.cjs#L525482-L525487) | `FunctionExpression` | no | `actionCase` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525482-525487](../../../../../../reference/runtime/sand-eval-runner.cjs#L525482-L525487) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525482

Calls written directly in this body: `auditActionCounts.get`, `auditActionCounts.set`, `computerUseAuditKind`, `deps.actionAuditor`.

SHA-256 of the source span: `8f72c476c8877e0c4675bd406e382b3af23efff4799184c733830e93f3c15ab2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
