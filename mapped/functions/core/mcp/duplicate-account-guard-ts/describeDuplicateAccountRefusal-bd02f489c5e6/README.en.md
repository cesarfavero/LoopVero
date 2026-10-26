# `describeDuplicateAccountRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/duplicate-account-guard.ts` · [Module README](../../../../../modules/core/mcp/duplicate-account-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779418-779422](../../../../../../reference/runtime/host-main.cjs#L779418-L779422) | `FunctionDeclaration` | no | `duplicates` |
| [evaluation:579591-579595](../../../../../../reference/runtime/sand-eval-runner.cjs#L579591-L579595) | `FunctionDeclaration` | no | `duplicates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779418-779422](../../../../../../reference/runtime/host-main.cjs#L779418-L779422) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579591-579595](../../../../../../reference/runtime/sand-eval-runner.cjs#L579591-L579595) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779418

Calls written directly in this body: `.join`, `duplicates.accountKeys.find`, `duplicates.accountKeys.map`, `encodeMcpAccountLabelForListing`.

SHA-256 of the source span: `b62dbae0f78d644491957695cdeb6572cbce5422e0ed7dfcec806349032fe723`.

### evaluation:579591

Calls written directly in this body: `.join`, `duplicates.accountKeys.find`, `duplicates.accountKeys.map`, `encodeMcpAccountLabelForListing`.

SHA-256 of the source span: `b62dbae0f78d644491957695cdeb6572cbce5422e0ed7dfcec806349032fe723`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
