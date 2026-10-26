# `isNormalizedCookieHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-grant.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485858-485860](../../../../../../reference/runtime/host-main.cjs#L485858-L485860) | `FunctionDeclaration` | no | `host` |
| [evaluation:574558-574560](../../../../../../reference/runtime/sand-eval-runner.cjs#L574558-L574560) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485858-485860](../../../../../../reference/runtime/host-main.cjs#L485858-L485860) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574558-574560](../../../../../../reference/runtime/sand-eval-runner.cjs#L574558-L574560) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485858

Calls written directly in this body: `chromeCookieAllowHost`.

SHA-256 of the source span: `74dcf6665d9c4edabf4f8810b5de1685deb60917c2fd78dc1a4486cdb90eced3`.

### evaluation:574558

Calls written directly in this body: `chromeCookieAllowHost`.

SHA-256 of the source span: `74dcf6665d9c4edabf4f8810b5de1685deb60917c2fd78dc1a4486cdb90eced3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
