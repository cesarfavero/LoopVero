# `readFileTransferResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/file-transfer-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569131-569147](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569131-L569147) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569131-569147](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569131-L569147) | 7 | 0 | 0 | 5 | 0 | 0 |

### evaluation:569131

Calls written directly in this body: `readOutputByteLength`.

SHA-256 of the source span: `9862cb41f689e6ff06507889cc0e2f4a2a33b78882e1a838a35629b4a8e4144c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
