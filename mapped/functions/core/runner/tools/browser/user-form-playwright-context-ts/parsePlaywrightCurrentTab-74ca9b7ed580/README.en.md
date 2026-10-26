# `parsePlaywrightCurrentTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767469-767478](../../../../../../../../reference/runtime/host-main.cjs#L767469-L767478) | `FunctionDeclaration` | no | `text3` |
| [evaluation:562986-562995](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562986-L562995) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767469-767478](../../../../../../../../reference/runtime/host-main.cjs#L767469-L767478) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:562986-562995](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562986-L562995) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:767469

Calls written directly in this body: `CURRENT_TAB_ROW_PATTERN.exec`, `Number`, `match2[computed].replace`, `row.endsWith`, `row.lastIndexOf`, `row.slice`.

SHA-256 of the source span: `69c636120ad2e68fe29f9544618511706fd6961dd6b81f019023700cdc3d91d3`.

### evaluation:562986

Calls written directly in this body: `CURRENT_TAB_ROW_PATTERN.exec`, `Number`, `match2[computed].replace`, `row.endsWith`, `row.lastIndexOf`, `row.slice`.

SHA-256 of the source span: `69c636120ad2e68fe29f9544618511706fd6961dd6b81f019023700cdc3d91d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
