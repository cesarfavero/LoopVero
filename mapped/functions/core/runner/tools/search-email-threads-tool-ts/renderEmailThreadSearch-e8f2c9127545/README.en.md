# `renderEmailThreadSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/search-email-threads-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765183-765195](../../../../../../../reference/runtime/host-main.cjs#L765183-L765195) | `FunctionDeclaration` | no | `query2, threads` |
| [evaluation:558551-558563](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558551-L558563) | `FunctionDeclaration` | no | `query2, threads` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765183-765195](../../../../../../../reference/runtime/host-main.cjs#L765183-L765195) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558551-558563](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558551-L558563) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:765183

Calls written directly in this body: `lines2.join`, `lines2.push`, `threads.forEach`.

SHA-256 of the source span: `e97535e6e393fecb0849131539155704d1d1be4a2e9a29ea78b248977c7369e2`.

### evaluation:558551

Calls written directly in this body: `lines2.join`, `lines2.push`, `threads.forEach`.

SHA-256 of the source span: `e97535e6e393fecb0849131539155704d1d1be4a2e9a29ea78b248977c7369e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
