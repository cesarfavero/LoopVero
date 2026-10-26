# `sliceHeadSafe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/context-stripping.js` · [Module README](../../../../modules/agent-transcript/context-stripping-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509521-509540](../../../../../reference/runtime/host-main.cjs#L509521-L509540) | `FunctionDeclaration` | no | `text3, maxUnits` |
| [evaluation:294699-294718](../../../../../reference/runtime/sand-eval-runner.cjs#L294699-L294718) | `FunctionDeclaration` | no | `text3, maxUnits` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509521-509540](../../../../../reference/runtime/host-main.cjs#L509521-L509540) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:294699-294718](../../../../../reference/runtime/sand-eval-runner.cjs#L294699-L294718) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:509521

Calls written directly in this body: `graphemeSegmenter.segment`, `isHighSurrogate`, `text3.charCodeAt`, `text3.slice`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `c6bcfd1265598c80096f5e7f197f643fbb6adb20a83b9f931bb7e3ce4b19cfde`.

### evaluation:294699

Calls written directly in this body: `graphemeSegmenter.segment`, `isHighSurrogate`, `text3.charCodeAt`, `text3.slice`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `c6bcfd1265598c80096f5e7f197f643fbb6adb20a83b9f931bb7e3ce4b19cfde`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
