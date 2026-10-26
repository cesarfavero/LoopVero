# `skipSitesInProse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cookie-import-skip-sites.ts` · [Module README](../../../../../modules/core/runner/cookie-import-skip-sites-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775088-775092](../../../../../../reference/runtime/host-main.cjs#L775088-L775092) | `FunctionDeclaration` | no | `conjunction` |
| [evaluation:574735-574739](../../../../../../reference/runtime/sand-eval-runner.cjs#L574735-L574739) | `FunctionDeclaration` | no | `conjunction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775088-775092](../../../../../../reference/runtime/host-main.cjs#L775088-L775092) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574735-574739](../../../../../../reference/runtime/sand-eval-runner.cjs#L574735-L574739) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:775088

Calls written directly in this body: `sites.join`, `sites.pop`.

SHA-256 of the source span: `56e2be6d1f3a61e79b90c90ae98ddff92c694f4e09b1a89e8b29f995b4769ce3`.

### evaluation:574735

Calls written directly in this body: `sites.join`, `sites.pop`.

SHA-256 of the source span: `56e2be6d1f3a61e79b90c90ae98ddff92c694f4e09b1a89e8b29f995b4769ce3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
