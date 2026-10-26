# `CardReader.variant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707475-707523](../../../../../../reference/runtime/host-main.cjs#L707475-L707523) | `method` | no | `path33, value, options2` |
| [evaluation:481597-481645](../../../../../../reference/runtime/sand-eval-runner.cjs#L481597-L481645) | `method` | no | `path33, value, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707475-707523](../../../../../../reference/runtime/host-main.cjs#L707475-L707523) | 11 | 1 | 0 | 7 | 0 | 0 |
| [evaluation:481597-481645](../../../../../../reference/runtime/sand-eval-runner.cjs#L481597-L481645) | 11 | 1 | 0 | 7 | 0 | 0 |

### host:707475

Calls written directly in this body: `.flatMap`, `.join`, `.map`, `Object.entries`, `String`, `isUnknownRecord2`, `missing.join`, `option.values.map`, `option.values.some`, `options2.filter`, `options2.find`, `options2.map`, `this.count`, `this.error`, `this.record`, `this.text`, `this.url`.

Assignment or increment targets: `picked[computed]`.

SHA-256 of the source span: `34ccb33bf9647da4fa6a3210212bdb2790d0f6cea1c5832d179552a6c58b21c7`.

### evaluation:481597

Calls written directly in this body: `.flatMap`, `.join`, `.map`, `Object.entries`, `String`, `isUnknownRecord2`, `missing.join`, `option.values.map`, `option.values.some`, `options2.filter`, `options2.find`, `options2.map`, `this.count`, `this.error`, `this.record`, `this.text`, `this.url`.

Assignment or increment targets: `picked[computed]`.

SHA-256 of the source span: `34ccb33bf9647da4fa6a3210212bdb2790d0f6cea1c5832d179552a6c58b21c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
