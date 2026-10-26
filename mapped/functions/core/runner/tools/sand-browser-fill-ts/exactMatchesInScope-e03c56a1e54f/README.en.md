# `exactMatchesInScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727051-727059](../../../../../../../reference/runtime/host-main.cjs#L727051-L727059) | `FunctionDeclaration` | no | `matches, frameNeedle, inFrame, uniqueExactAcrossFrames` |
| [evaluation:561662-561670](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561662-L561670) | `FunctionDeclaration` | no | `matches, frameNeedle, inFrame, uniqueExactAcrossFrames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727051-727059](../../../../../../../reference/runtime/host-main.cjs#L727051-L727059) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:561662-561670](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561662-L561670) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:727051

Calls written directly in this body: `inFrame`, `matches.filter`.

SHA-256 of the source span: `d240a6fd097b7e71035733f92f9c34474056a479a4c00d3692a4ac2c921e73fc`.

### evaluation:561662

Calls written directly in this body: `inFrame`, `matches.filter`.

SHA-256 of the source span: `d240a6fd097b7e71035733f92f9c34474056a479a4c00d3692a4ac2c921e73fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
