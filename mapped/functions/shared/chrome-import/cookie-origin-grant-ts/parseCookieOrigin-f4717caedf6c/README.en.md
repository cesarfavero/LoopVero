# `parseCookieOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-grant.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485861-485865](../../../../../../reference/runtime/host-main.cjs#L485861-L485865) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574561-574565](../../../../../../reference/runtime/sand-eval-runner.cjs#L574561-L574565) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485861-485865](../../../../../../reference/runtime/host-main.cjs#L485861-L485865) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574561-574565](../../../../../../reference/runtime/sand-eval-runner.cjs#L574561-L574565) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:485861

Calls written directly in this body: `brandParsedString`, `chromeCookieAllowHost`, `isNormalizedCookieHost`, `raw.trim`.

SHA-256 of the source span: `38a180cf2b1de4e343a2a355e9a5e8dd059c09df8b398fd1adac8c909b642bbd`.

### evaluation:574561

Calls written directly in this body: `brandParsedString`, `chromeCookieAllowHost`, `isNormalizedCookieHost`, `raw.trim`.

SHA-256 of the source span: `38a180cf2b1de4e343a2a355e9a5e8dd059c09df8b398fd1adac8c909b642bbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
