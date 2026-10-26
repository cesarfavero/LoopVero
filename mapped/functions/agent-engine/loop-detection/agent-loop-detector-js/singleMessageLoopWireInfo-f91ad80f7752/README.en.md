# `singleMessageLoopWireInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624615-624624](../../../../../../reference/runtime/host-main.cjs#L624615-L624624) | `FunctionDeclaration` | no | `options2` |
| [evaluation:310747-310756](../../../../../../reference/runtime/sand-eval-runner.cjs#L310747-L310756) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624615-624624](../../../../../../reference/runtime/host-main.cjs#L624615-L624624) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:310747-310756](../../../../../../reference/runtime/sand-eval-runner.cjs#L310747-L310756) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:624615

Calls written directly in this body: `String`.

Assignment or increment targets: `info2[computed]`.

SHA-256 of the source span: `ff3868da203b4d808aea89982e1bf330a83d8ace6964cca19527fc50928655bc`.

### evaluation:310747

Calls written directly in this body: `String`.

Assignment or increment targets: `info2[computed]`.

SHA-256 of the source span: `ff3868da203b4d808aea89982e1bf330a83d8ace6964cca19527fc50928655bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
