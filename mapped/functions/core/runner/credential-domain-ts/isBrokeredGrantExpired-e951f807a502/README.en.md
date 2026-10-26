# `isBrokeredGrantExpired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546868-546873](../../../../../../reference/runtime/host-main.cjs#L546868-L546873) | `FunctionDeclaration` | no | `{   grantedAtMs,   nowMs: nowMs2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546868-546873](../../../../../../reference/runtime/host-main.cjs#L546868-L546873) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546868

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `b37e50c86b4a552a551406f22384d72212a0007aefc493c5ef76b24db65603b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
