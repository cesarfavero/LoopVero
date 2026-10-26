# `parseCookieOriginGrant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-grant.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485866-485872](../../../../../../reference/runtime/host-main.cjs#L485866-L485872) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485866-485872](../../../../../../reference/runtime/host-main.cjs#L485866-L485872) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:485866

Calls written directly in this body: `isUnknownRecord2`, `parseChromeProfileId`, `parseCookieOrigin`.

SHA-256 of the source span: `692a4859cad06ab0e63ee39e73d9c67c60e4ae54a07b797d7d2a087b10b13efe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
