# `stripLeadingScratchpad`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617228-617239](../../../../../reference/runtime/host-main.cjs#L617228-L617239) | `FunctionDeclaration` | no | `inner` |
| [evaluation:285768-285779](../../../../../reference/runtime/sand-eval-runner.cjs#L285768-L285779) | `FunctionDeclaration` | no | `inner` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617228-617239](../../../../../reference/runtime/host-main.cjs#L617228-L617239) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285768-285779](../../../../../reference/runtime/sand-eval-runner.cjs#L285768-L285779) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:617228

Calls written directly in this body: `.trimStart`, `/^[0-9]/.test`, `inner.trim`, `text3.lastIndexOf`, `text3.replace`, `text3.slice`, `text3.startsWith`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `9c86d085d25a3db0228a01116695d1ef1d1d126f798eb35770cba3791b579681`.

### evaluation:285768

Calls written directly in this body: `.trimStart`, `/^[0-9]/.test`, `inner.trim`, `text3.lastIndexOf`, `text3.replace`, `text3.slice`, `text3.startsWith`.

Assignment or increment targets: `text3`.

SHA-256 of the source span: `9c86d085d25a3db0228a01116695d1ef1d1d126f798eb35770cba3791b579681`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
