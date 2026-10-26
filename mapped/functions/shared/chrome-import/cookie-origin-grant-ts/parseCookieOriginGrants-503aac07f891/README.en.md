# `parseCookieOriginGrants`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-grant.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485873-485880](../../../../../../reference/runtime/host-main.cjs#L485873-L485880) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485873-485880](../../../../../../reference/runtime/host-main.cjs#L485873-L485880) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:485873

Calls written directly in this body: `grants.push`, `parseCookieOriginGrant`.

SHA-256 of the source span: `d9665560bacca81dd16a8f4cfacd94b40349dcadbc4d4929f1a2d82d6d74592f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
