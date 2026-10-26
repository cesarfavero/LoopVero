# `memoryRecallRank`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702659-702661](../../../../../../reference/runtime/host-main.cjs#L702659-L702661) | `FunctionDeclaration` | no | `memory` |
| [evaluation:536161-536163](../../../../../../reference/runtime/sand-eval-runner.cjs#L536161-L536163) | `FunctionDeclaration` | no | `memory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702659-702661](../../../../../../reference/runtime/host-main.cjs#L702659-L702661) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536161-536163](../../../../../../reference/runtime/sand-eval-runner.cjs#L536161-L536163) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702659

Calls written directly in this body: `Math.log2`, `memoryImportance`.

SHA-256 of the source span: `6c787ecd73794a57b5afa33223b61b8a4416013fab747e57893abbb77535affb`.

### evaluation:536161

Calls written directly in this body: `Math.log2`, `memoryImportance`.

SHA-256 of the source span: `e25ecb598f585beee13303c63fb54e2f92f57de74c86b185628329b7e4477189`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
