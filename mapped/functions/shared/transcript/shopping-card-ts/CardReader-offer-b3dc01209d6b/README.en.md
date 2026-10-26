# `CardReader.offer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707400-707440](../../../../../../reference/runtime/host-main.cjs#L707400-L707440) | `method` | no | `path33, value` |
| [evaluation:481522-481562](../../../../../../reference/runtime/sand-eval-runner.cjs#L481522-L481562) | `method` | no | `path33, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707400-707440](../../../../../../reference/runtime/host-main.cjs#L707400-L707440) | 12 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481522-481562](../../../../../../reference/runtime/sand-eval-runner.cjs#L481522-L481562) | 12 | 0 | 0 | 3 | 0 | 0 |

### host:707400

Calls written directly in this body: `SAND_SHOPPING_AVAILABILITIES.join`, `isOneOf3`, `this.error`, `this.list`, `this.money`, `this.record`, `this.text`, `this.url`.

Assignment or increment targets: `availability`, `listPrice`.

SHA-256 of the source span: `6634e593ccc5fe5333b685526a9c3260d545c09486d5ef5784b3b7ee695bbd2c`.

### evaluation:481522

Calls written directly in this body: `SAND_SHOPPING_AVAILABILITIES.join`, `isOneOf2`, `this.error`, `this.list`, `this.money`, `this.record`, `this.text`, `this.url`.

Assignment or increment targets: `availability`, `listPrice`.

SHA-256 of the source span: `a1cf36e460056c0c7c047935ef6b1c5d57c380eab44098a6ca7d692142b137b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
