# `parseChromeProfileId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-grant.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485853-485857](../../../../../../reference/runtime/host-main.cjs#L485853-L485857) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574553-574557](../../../../../../reference/runtime/sand-eval-runner.cjs#L574553-L574557) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485853-485857](../../../../../../reference/runtime/host-main.cjs#L485853-L485857) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574553-574557](../../../../../../reference/runtime/sand-eval-runner.cjs#L574553-L574557) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:485853

Calls written directly in this body: `brandParsedString`, `raw.trim`.

SHA-256 of the source span: `743f5177b70ad58b654f7cae0fd146cf5ab243aab9988aac5e3b2904de86f8dd`.

### evaluation:574553

Calls written directly in this body: `brandParsedString`, `raw.trim`.

SHA-256 of the source span: `743f5177b70ad58b654f7cae0fd146cf5ab243aab9988aac5e3b2904de86f8dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
