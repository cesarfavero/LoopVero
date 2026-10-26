# `JsonStringContentStream.push`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/json-string-content-stream.js` · [Module README](../../../../../modules/agent-engine/loop-detection/json-string-content-stream-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624855-624894](../../../../../../reference/runtime/host-main.cjs#L624855-L624894) | `method` | no | `chunk` |
| [evaluation:311573-311612](../../../../../../reference/runtime/sand-eval-runner.cjs#L311573-L311612) | `method` | no | `chunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624855-624894](../../../../../../reference/runtime/host-main.cjs#L624855-L624894) | 9 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:311573-311612](../../../../../../reference/runtime/sand-eval-runner.cjs#L311573-L311612) | 9 | 1 | 0 | 1 | 0 | 0 |

### host:624855

Calls written directly in this body: `Number.isNaN`, `Number.parseInt`, `String.fromCharCode`.

Assignment or increment targets: `out`, `this.inEscape`, `this.inString`, `this.unicodeHex`.

SHA-256 of the source span: `26813b75bc8e23cb8bc906437617f7520782c6f9a2c888f86919baf6ad8134c5`.

### evaluation:311573

Calls written directly in this body: `Number.isNaN`, `Number.parseInt`, `String.fromCharCode`.

Assignment or increment targets: `out`, `this.inEscape`, `this.inString`, `this.unicodeHex`.

SHA-256 of the source span: `26813b75bc8e23cb8bc906437617f7520782c6f9a2c888f86919baf6ad8134c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
