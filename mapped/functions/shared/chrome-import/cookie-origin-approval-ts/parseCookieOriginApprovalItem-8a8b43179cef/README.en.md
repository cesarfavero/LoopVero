# `parseCookieOriginApprovalItem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-approval.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-approval-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485897-485904](../../../../../../reference/runtime/host-main.cjs#L485897-L485904) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485897-485904](../../../../../../reference/runtime/host-main.cjs#L485897-L485904) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:485897

Calls written directly in this body: `isUnknownRecord2`, `parseChromeProfileId`, `parseCookieOrigin`, `raw.profileDisplayName.trim`.

SHA-256 of the source span: `86ef9375576171311f1cc85759a4e9bbe74066e3f759761ff516ec30687930b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
