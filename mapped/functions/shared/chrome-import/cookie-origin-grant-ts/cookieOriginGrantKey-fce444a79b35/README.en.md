# `cookieOriginGrantKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-grant.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485881-485883](../../../../../../reference/runtime/host-main.cjs#L485881-L485883) | `FunctionDeclaration` | no | `grant` |
| [evaluation:574566-574568](../../../../../../reference/runtime/sand-eval-runner.cjs#L574566-L574568) | `FunctionDeclaration` | no | `grant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485881-485883](../../../../../../reference/runtime/host-main.cjs#L485881-L485883) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574566-574568](../../../../../../reference/runtime/sand-eval-runner.cjs#L574566-L574568) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485881

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `8bf1ee736715a1dd794d6395ac6410ebf398a5e839ff76777ff0831a21d518ca`.

### evaluation:574566

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `8bf1ee736715a1dd794d6395ac6410ebf398a5e839ff76777ff0831a21d518ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
