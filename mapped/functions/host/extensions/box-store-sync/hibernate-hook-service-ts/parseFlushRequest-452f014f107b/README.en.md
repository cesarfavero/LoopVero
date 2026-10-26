# `parseFlushRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/hibernate-hook-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/hibernate-hook-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481920-481929](../../../../../../../reference/runtime/host-main.cjs#L481920-L481929) | `FunctionDeclaration` | no | `line, fifoDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481920-481929](../../../../../../../reference/runtime/host-main.cjs#L481920-L481929) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:481920

Calls written directly in this body: `/^[0-9]+\.[A-Za-z0-9]{3,}$/.test`, `line.split`, `responsePath.slice`, `responsePath.startsWith`.

SHA-256 of the source span: `c407fa81020aea4c6db908da123982882c69d63122864c5cea4ff09f9adf29e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
