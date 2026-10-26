# `sanitizeText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-audit.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546897-546909](../../../../../../../reference/runtime/host-main.cjs#L546897-L546909) | `FunctionDeclaration` | no | `value, sensitiveValues` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546897-546909](../../../../../../../reference/runtime/host-main.cjs#L546897-L546909) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:546897

Calls written directly in this body: `.replace`, `.trim`, `escapeRegExp3`, `new RegExp`, `sanitized.replace`, `sanitized.slice`, `sensitiveVariants`.

Assignment or increment targets: `sanitized`.

SHA-256 of the source span: `f5bffbd5d59a1c9a7b859de8df447ace2e6407312fedf4323f2fd1153b0e0107`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
