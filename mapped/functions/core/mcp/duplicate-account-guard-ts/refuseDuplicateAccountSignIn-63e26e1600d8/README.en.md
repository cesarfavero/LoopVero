# `refuseDuplicateAccountSignIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/duplicate-account-guard.ts` · [Module README](../../../../../modules/core/mcp/duplicate-account-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779423-779429](../../../../../../reference/runtime/host-main.cjs#L779423-L779429) | `FunctionDeclaration` | no | `ctx, servers, request5` |
| [evaluation:579596-579602](../../../../../../reference/runtime/sand-eval-runner.cjs#L579596-L579602) | `FunctionDeclaration` | no | `ctx, servers, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779423-779429](../../../../../../reference/runtime/host-main.cjs#L779423-L779429) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579596-579602](../../../../../../reference/runtime/sand-eval-runner.cjs#L579596-L579602) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:779423

Calls written directly in this body: `describeDuplicateAccountRefusal`, `duplicateAccountGuardDecisions.increment`, `findDuplicateAccountSlots`, `request5.enforced`.

SHA-256 of the source span: `ea581cb52b74e6cc235894855f9b9c307e79814c9cace5507b97c2ab45bce0f1`.

### evaluation:579596

Calls written directly in this body: `describeDuplicateAccountRefusal`, `duplicateAccountGuardDecisions.increment`, `findDuplicateAccountSlots`, `request3.enforced`.

SHA-256 of the source span: `dea724abb1f5b4a4d19a6f5b513cf762a219b84f12152e133fc8c836a1bcd887`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
