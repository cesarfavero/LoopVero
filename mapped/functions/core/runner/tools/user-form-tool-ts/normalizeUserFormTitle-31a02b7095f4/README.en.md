# `normalizeUserFormTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726301-726309](../../../../../../../reference/runtime/host-main.cjs#L726301-L726309) | `FunctionDeclaration` | no | `raw` |
| [evaluation:560916-560924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560916-L560924) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726301-726309](../../../../../../../reference/runtime/host-main.cjs#L726301-L726309) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:560916-560924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560916-L560924) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:726301

Calls written directly in this body: `.toLowerCase`, `BARE_FORM_TITLES.has`, `capitalizeLeadingWord`, `clampLine`, `new SandToolInputError`, `stripWordPunctuation`, `titleNamesUrlOrLowercaseDomain`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `516fa3a9e3bd97f224eb3b67f1f8b44e71bb9f4768405dd558364b5b73879713`.

### evaluation:560916

Calls written directly in this body: `.toLowerCase`, `BARE_FORM_TITLES.has`, `capitalizeLeadingWord`, `clampLine`, `new SandToolInputError`, `stripWordPunctuation`, `titleNamesUrlOrLowercaseDomain`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `516fa3a9e3bd97f224eb3b67f1f8b44e71bb9f4768405dd558364b5b73879713`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
