# `waitForSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750607-750612](../../../../../../../reference/runtime/host-main.cjs#L750607-L750612) | `FunctionDeclaration` | no | `row` |
| [evaluation:523458-523463](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523458-L523463) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750607-750612](../../../../../../../reference/runtime/host-main.cjs#L750607-L750612) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523458-523463](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523458-L523463) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750607

Calls written directly in this body: `jsonObjectOf`, `playwrightToolInputSchema`.

Assignment or increment targets: `time4.description`.

SHA-256 of the source span: `622591fc53a67027cdbc535e47dd6fd7c106749b323b8fd02c1dbea475d3f16e`.

### evaluation:523458

Calls written directly in this body: `jsonObjectOf`, `playwrightToolInputSchema`.

Assignment or increment targets: `time4.description`.

SHA-256 of the source span: `622591fc53a67027cdbc535e47dd6fd7c106749b323b8fd02c1dbea475d3f16e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
