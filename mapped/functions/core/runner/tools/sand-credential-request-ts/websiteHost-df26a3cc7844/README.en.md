# `websiteHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725517-725519](../../../../../../../reference/runtime/host-main.cjs#L725517-L725519) | `FunctionDeclaration` | no | `website` |
| [evaluation:524620-524622](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524620-L524622) | `FunctionDeclaration` | no | `website` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725517-725519](../../../../../../../reference/runtime/host-main.cjs#L725517-L725519) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524620-524622](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524620-L524622) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725517

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `6ab00a036a984c969604410e063f8c0109c353a65006f9a019b9632f238a2e93`.

### evaluation:524620

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `6ab00a036a984c969604410e063f8c0109c353a65006f9a019b9632f238a2e93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
