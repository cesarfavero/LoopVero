# `playwrightToolInputSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750578-750606](../../../../../../../reference/runtime/host-main.cjs#L750578-L750606) | `FunctionDeclaration` | no | `row` |
| [evaluation:523429-523457](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523429-L523457) | `FunctionDeclaration` | no | `row` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750578-750606](../../../../../../../reference/runtime/host-main.cjs#L750578-L750606) | 5 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:523429-523457](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523429-L523457) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:750578

Calls written directly in this body: `.filter`, `Array.isArray`, `JSON.parse`, `JSON.stringify`, `jsonObjectOf`, `required2.push`, `shortenArgDescriptions`.

Assignment or increment targets: `code.maxLength`, `time4.maximum`.

SHA-256 of the source span: `f4290fe4a1889803fe29ec519955da81077e8a91b1fd2b00801b26567d10567e`.

### evaluation:523429

Calls written directly in this body: `.filter`, `Array.isArray`, `JSON.parse`, `JSON.stringify`, `jsonObjectOf`, `required2.push`, `shortenArgDescriptions`.

Assignment or increment targets: `code.maxLength`, `time4.maximum`.

SHA-256 of the source span: `f4290fe4a1889803fe29ec519955da81077e8a91b1fd2b00801b26567d10567e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
