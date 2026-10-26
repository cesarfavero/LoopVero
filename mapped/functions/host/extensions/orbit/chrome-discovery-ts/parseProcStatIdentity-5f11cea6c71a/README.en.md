# `parseProcStatIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/chrome-discovery.ts` · [Module README](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705318-705333](../../../../../../../reference/runtime/host-main.cjs#L705318-L705333) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705318-705333](../../../../../../../reference/runtime/host-main.cjs#L705318-L705333) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:705318

Calls written directly in this body: `.split`, `.trim`, `/^\d+$/.test`, `BigInt`, `raw.indexOf`, `raw.lastIndexOf`, `raw.slice`.

SHA-256 of the source span: `54df9210b3084a016466dbb1b09ccabbda38ce5a75fc93f69d1330ad9489f031`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
