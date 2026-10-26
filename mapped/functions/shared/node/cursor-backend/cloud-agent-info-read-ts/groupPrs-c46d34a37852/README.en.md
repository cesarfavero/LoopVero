# `groupPrs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508398-508415](../../../../../../../reference/runtime/host-main.cjs#L508398-L508415) | `FunctionDeclaration` | no | `detailed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508398-508415](../../../../../../../reference/runtime/host-main.cjs#L508398-L508415) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:508398

Calls written directly in this body: `.flat`, `.reverse`, `new Map`, `own3.find`, `own3.push`, `threadsInMembershipOrder.get`, `threadsInMembershipOrder.set`, `threadsInMembershipOrder.values`.

SHA-256 of the source span: `aa6624c677901cc87cce402df19372716ab0451d9b897eadb98ca3677b9559e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
