# `builtinScmAbsenceGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:753703-753706](../../../../../../reference/runtime/host-main.cjs#L753703-L753706) | `FunctionDeclaration` | no | `options2` |
| [evaluation:532380-532383](../../../../../../reference/runtime/sand-eval-runner.cjs#L532380-L532383) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753703-753706](../../../../../../reference/runtime/host-main.cjs#L753703-L753706) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:532380-532383](../../../../../../reference/runtime/sand-eval-runner.cjs#L532380-L532383) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:753703

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ba0fa44ccc43adc91a8a9a8faf4c4bc370d9ae4d08da6a640691158ac9734914`.

### evaluation:532380

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `db79002e5d24d6fd0e0060bbbbc3109f52b7c9797f2bc442f867b414a2339aa5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
