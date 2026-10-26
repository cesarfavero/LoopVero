# `jsonObjectFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/struct-from-record.ts` · [Module README](../../../../../modules/core/runner/struct-from-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699140-699147](../../../../../../reference/runtime/host-main.cjs#L699140-L699147) | `FunctionDeclaration` | no | `record3, path33` |
| [evaluation:512971-512978](../../../../../../reference/runtime/sand-eval-runner.cjs#L512971-L512978) | `FunctionDeclaration` | no | `record4, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699140-699147](../../../../../../reference/runtime/host-main.cjs#L699140-L699147) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:512971-512978](../../../../../../reference/runtime/sand-eval-runner.cjs#L512971-L512978) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:699140

Calls written directly in this body: `Object.entries`, `jsonValueFrom`.

Assignment or increment targets: `result[computed]`.

SHA-256 of the source span: `f6cd387229dab6965207a76ee0abf2303fb833c08226561842a8ab634adc05ac`.

### evaluation:512971

Calls written directly in this body: `Object.entries`, `jsonValueFrom`.

Assignment or increment targets: `result[computed]`.

SHA-256 of the source span: `7a1e355cb8314b2f46673895038f144a56b8b7c8cfab95eb3a2d2d9eba160895`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
