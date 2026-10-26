# `playwrightToolDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750632-750638](../../../../../../../reference/runtime/host-main.cjs#L750632-L750638) | `FunctionDeclaration` | no | `row, arms` |
| [evaluation:523483-523489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523483-L523489) | `FunctionDeclaration` | no | `row, arms` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750632-750638](../../../../../../../reference/runtime/host-main.cjs#L750632-L750638) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523483-523489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523483-L523489) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:750632

Calls written directly in this body: `RUN_CODE_PRIMARY_ROWS.has`, `baseToolDescription`.

SHA-256 of the source span: `c61e2bfc039b7a0473985412cd52e0ab7bac254296663b11dccd36a580e312a4`.

### evaluation:523483

Calls written directly in this body: `RUN_CODE_PRIMARY_ROWS.has`, `baseToolDescription`.

SHA-256 of the source span: `c61e2bfc039b7a0473985412cd52e0ab7bac254296663b11dccd36a580e312a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
