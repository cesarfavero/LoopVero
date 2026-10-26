# `sanitizeOptionalText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-audit.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546910-546914](../../../../../../../reference/runtime/host-main.cjs#L546910-L546914) | `FunctionDeclaration` | no | `value, sensitiveValues` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546910-546914](../../../../../../../reference/runtime/host-main.cjs#L546910-L546914) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:546910

Calls written directly in this body: `sanitizeText`.

SHA-256 of the source span: `bde50159c5d3ba1c7c95185ec3561b4c56a8042463a3d99dab426d2ca0223c44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
