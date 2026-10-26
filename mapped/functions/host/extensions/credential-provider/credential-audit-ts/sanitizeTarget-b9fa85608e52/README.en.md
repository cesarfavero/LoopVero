# `sanitizeTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-audit.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546915-546929](../../../../../../../reference/runtime/host-main.cjs#L546915-L546929) | `FunctionDeclaration` | no | `raw, sensitiveValues` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546915-546929](../../../../../../../reference/runtime/host-main.cjs#L546915-L546929) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:546915

Calls written directly in this body: `URL.canParse`, `decodeURIComponent`, `new URL`, `raw.includes`, `sanitizeText`.

Assignment or increment targets: `pathname`.

SHA-256 of the source span: `732baad20cfec6324fa4c7617679d963ae63a27583aae424f06fdae11f89142b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
