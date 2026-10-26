# `bindFileTransferAudit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/file-transfer-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770385-770390](../../../../../../../reference/runtime/host-main.cjs#L770385-L770390) | `FunctionDeclaration` | no | `audit, ctx, call` |
| [evaluation:569108-569113](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569108-L569113) | `FunctionDeclaration` | no | `audit, ctx, call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770385-770390](../../../../../../../reference/runtime/host-main.cjs#L770385-L770390) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569108-569113](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569108-L569113) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770385

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7f7cd42baf8da1caf2b93c43db7020cb5226b830dc05709d8334a9a5b649a070`.

### evaluation:569108

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7f7cd42baf8da1caf2b93c43db7020cb5226b830dc05709d8334a9a5b649a070`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
