# `CardReader.text`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707290-707302](../../../../../../reference/runtime/host-main.cjs#L707290-L707302) | `method` | no | `path33, value, max, required2` |
| [evaluation:481412-481424](../../../../../../reference/runtime/sand-eval-runner.cjs#L481412-L481424) | `method` | no | `path33, value, max, required2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707290-707302](../../../../../../reference/runtime/host-main.cjs#L707290-L707302) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:481412-481424](../../../../../../reference/runtime/sand-eval-runner.cjs#L481412-L481424) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:707290

Calls written directly in this body: `text3.slice`, `this.error`, `value.trim`.

SHA-256 of the source span: `761d580d84773aedd5e43c1e7dd967d78461af8c40577de3d5485a5ac908174d`.

### evaluation:481412

Calls written directly in this body: `text3.slice`, `this.error`, `value.trim`.

SHA-256 of the source span: `761d580d84773aedd5e43c1e7dd967d78461af8c40577de3d5485a5ac908174d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
