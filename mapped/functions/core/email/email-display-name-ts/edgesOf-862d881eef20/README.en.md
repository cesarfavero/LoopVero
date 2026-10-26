# `edgesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715830-715872](../../../../../../reference/runtime/host-main.cjs#L715830-L715872) | `FunctionDeclaration` | no | `words2, {   affixes,   crossesWords }` |
| [evaluation:527499-527541](../../../../../../reference/runtime/sand-eval-runner.cjs#L527499-L527541) | `FunctionDeclaration` | no | `words, {   affixes,   crossesWords }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715830-715872](../../../../../../reference/runtime/host-main.cjs#L715830-L715872) | 5 | 4 | 0 | 1 | 0 | 0 |
| [evaluation:527499-527541](../../../../../../reference/runtime/sand-eval-runner.cjs#L527499-L527541) | 5 | 4 | 0 | 1 | 0 | 0 |

### host:715830

Calls written directly in this body: `affixes.find`, `new Uint8Array`, `pending.pop`, `pending.push`, `text3.endsWith`, `words2.join`.

Assignment or increment targets: `end`, `first`, `lastStart`, `mayEnd[computed]`, `mayStart[computed]`, `start`.

SHA-256 of the source span: `1870f641cfdb9e22192b6fddacd06c56ec024ee1bcf030f42453ba065d41ae96`.

### evaluation:527499

Calls written directly in this body: `affixes.find`, `new Uint8Array`, `pending.pop`, `pending.push`, `text3.endsWith`, `words.join`.

Assignment or increment targets: `end`, `first`, `lastStart`, `mayEnd[computed]`, `mayStart[computed]`, `start`.

SHA-256 of the source span: `021cda8b3f8048adf6b088dbb544467e9d18428c766babb93db5aa9098203074`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
