# `dashboardUrlOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175753-175761](../../../../../../reference/runtime/host-main.cjs#L175753-L175761) | `FunctionDeclaration` | no | `readBackendUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175753-175761](../../../../../../reference/runtime/host-main.cjs#L175753-L175761) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:175753

Calls written directly in this body: `.hostname.toLowerCase`, `isLocalDevBackendHostname`, `new URL`, `readBackendUrl`.

Assignment or increment targets: `backendHostname`.

SHA-256 of the source span: `3443b028dc374573d259ba58800195f68e69f9885ed5fc0b172c986536035bcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
