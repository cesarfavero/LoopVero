# `auditedUserMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512849-512853](../../../../../../reference/runtime/sand-eval-runner.cjs#L512849-L512853) | `FunctionDeclaration` | no | `machineIds, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512849-512853](../../../../../../reference/runtime/sand-eval-runner.cjs#L512849-L512853) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512849

Calls written directly in this body: `machineIds.includes`.

SHA-256 of the source span: `1f4c1bb5445e2c982c78db3635fd417790827e457dbe7427fb6fb1de84c9c058`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
