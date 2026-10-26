# `MeetingRepeatSpec.problemOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763267-763270](../../../../../../reference/runtime/host-main.cjs#L763267-L763270) | `method` | no | `repeat` |
| [evaluation:556232-556235](../../../../../../reference/runtime/sand-eval-runner.cjs#L556232-L556235) | `method` | no | `repeat` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763267-763270](../../../../../../reference/runtime/host-main.cjs#L763267-L763270) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556232-556235](../../../../../../reference/runtime/sand-eval-runner.cjs#L556232-L556235) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763267

Calls written directly in this body: `schema2.safeParse`.

SHA-256 of the source span: `82aff4389deb5230450ad6d57ecae0376f1ae58c3181c66f61f132612eabc635`.

### evaluation:556232

Calls written directly in this body: `schema.safeParse`.

SHA-256 of the source span: `2d8e3eb922eab69de1286f3099dd200532394d47d6634922d9cf1de37654695c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
