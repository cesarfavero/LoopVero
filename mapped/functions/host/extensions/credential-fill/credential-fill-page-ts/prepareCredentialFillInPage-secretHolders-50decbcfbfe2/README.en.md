# `prepareCredentialFillInPage/secretHolders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-page.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543838-543856](../../../../../../../reference/runtime/host-main.cjs#L543838-L543856) | `ArrowFunctionExpression` | no | `liveInputs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543838-543856](../../../../../../../reference/runtime/host-main.cjs#L543838-L543856) | 3 | 4 | 0 | 1 | 0 | 0 |

### host:543838

Calls written directly in this body: `.join`, `filled.filter`, `holders.add`, `liveInputs.filter`, `new Set`, `singles.slice`, `window2.map`, `writtenSecrets.has`.

Assignment or increment targets: `start`.

SHA-256 of the source span: `8ca55fec3e61a559a46e8f8b07fc6e9072bb445051b75b69e8b5791faf8c7205`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
