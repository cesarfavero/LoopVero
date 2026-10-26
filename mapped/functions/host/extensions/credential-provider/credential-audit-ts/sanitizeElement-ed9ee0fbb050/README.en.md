# `sanitizeElement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-audit.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546930-546948](../../../../../../../reference/runtime/host-main.cjs#L546930-L546948) | `FunctionDeclaration` | no | `element, sensitiveValues` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546930-546948](../../../../../../../reference/runtime/host-main.cjs#L546930-L546948) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:546930

Calls written directly in this body: `sanitizeOptionalText`, `sanitizeText`.

SHA-256 of the source span: `acb5bdfde03fce61b405ac4f9607133fac8fdc8397559f523aa439e39a776508`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
