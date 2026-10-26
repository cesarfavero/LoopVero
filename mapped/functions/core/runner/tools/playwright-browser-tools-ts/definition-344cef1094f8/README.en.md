# `definition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750613-750631](../../../../../../../reference/runtime/host-main.cjs#L750613-L750631) | `FunctionDeclaration` | no | `row, server, arms` |
| [evaluation:523464-523482](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523464-L523482) | `FunctionDeclaration` | no | `row, server, arms` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750613-750631](../../../../../../../reference/runtime/host-main.cjs#L750613-L750631) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:523464-523482](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523464-L523482) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:750613

Calls written directly in this body: `Object.values`, `jsonObjectOf`, `playwrightToolDescription`, `playwrightToolInputSchema`, `property.description.replace`, `waitForSchema`.

Assignment or increment targets: `property.description`.

SHA-256 of the source span: `d3717c5af00aebad45fa3c5ed425d88ceef6e836f51a30fa9b9bade711990f65`.

### evaluation:523464

Calls written directly in this body: `Object.values`, `jsonObjectOf`, `playwrightToolDescription`, `playwrightToolInputSchema`, `property.description.replace`, `waitForSchema`.

Assignment or increment targets: `property.description`.

SHA-256 of the source span: `d3717c5af00aebad45fa3c5ed425d88ceef6e836f51a30fa9b9bade711990f65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
