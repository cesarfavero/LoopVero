# `hasPatternAnywhereInMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310924-310947](../../../../../../reference/runtime/sand-eval-runner.cjs#L310924-L310947) | `FunctionDeclaration` | no | `messageKeys, minRepetitions, minMessageLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310924-310947](../../../../../../reference/runtime/sand-eval-runner.cjs#L310924-L310947) | 3 | 2 | 0 | 3 | 0 | 0 |

### evaluation:310924

Calls written directly in this body: `.fill`, `Math.floor`, `Math.min`, `new Array`.

Assignment or increment targets: `i`, `p2`, `periodMatchRunLengths[computed]`.

SHA-256 of the source span: `eb1958bbf05532bbd9b691078e059518a9e027223c3d60090c4055d54ca62de3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
