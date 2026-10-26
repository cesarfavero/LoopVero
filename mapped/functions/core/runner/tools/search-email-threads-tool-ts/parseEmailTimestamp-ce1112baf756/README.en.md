# `parseEmailTimestamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/search-email-threads-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765149-765159](../../../../../../../reference/runtime/host-main.cjs#L765149-L765159) | `FunctionDeclaration` | no | `{   value,   field }` |
| [evaluation:558517-558527](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558517-L558527) | `FunctionDeclaration` | no | `{   value,   field }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765149-765159](../../../../../../../reference/runtime/host-main.cjs#L765149-L765159) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:558517-558527](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558517-L558527) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:765149

Calls written directly in this body: `Date.parse`, `Number.isNaN`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `ccc705c42bdfcac3558356563f63907019859c2640eb11def31fe29073a85969`.

### evaluation:558517

Calls written directly in this body: `Date.parse`, `Number.isNaN`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `ccc705c42bdfcac3558356563f63907019859c2640eb11def31fe29073a85969`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
