# `enabledMemoryTypes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-types.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:753946-753948](../../../../../../../reference/runtime/host-main.cjs#L753946-L753948) | `FunctionDeclaration` | no | `names3 = DEFAULT_ENABLED_MEMORY_TYPE_NAMES` |
| [evaluation:535116-535118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535116-L535118) | `FunctionDeclaration` | no | `names3 = DEFAULT_ENABLED_MEMORY_TYPE_NAMES` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753946-753948](../../../../../../../reference/runtime/host-main.cjs#L753946-L753948) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535116-535118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535116-L535118) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:753946

Calls written directly in this body: `GROK_BOT_MEMORY_TYPES.filter`.

SHA-256 of the source span: `e284c3330bb4a2db598190dbe8a6e2750828b5e587e90b8b70537508d20be4ee`.

### evaluation:535116

Calls written directly in this body: `GROK_BOT_MEMORY_TYPES.filter`.

SHA-256 of the source span: `e284c3330bb4a2db598190dbe8a6e2750828b5e587e90b8b70537508d20be4ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
