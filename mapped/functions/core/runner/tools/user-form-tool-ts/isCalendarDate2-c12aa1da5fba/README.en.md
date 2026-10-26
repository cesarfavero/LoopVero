# `isCalendarDate2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726310-726316](../../../../../../../reference/runtime/host-main.cjs#L726310-L726316) | `FunctionDeclaration` | no | `value` |
| [evaluation:560925-560931](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560925-L560931) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726310-726316](../../../../../../../reference/runtime/host-main.cjs#L726310-L726316) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560925-560931](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560925-L560931) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726310

Calls written directly in this body: `/^(\d{4})-(\d{2})-(\d{2})$/.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCFullYear`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `4738382a0f474ed04ba63cc02064b4a2e04f5140eaa89b848192b98578727e94`.

### evaluation:560925

Calls written directly in this body: `/^(\d{4})-(\d{2})-(\d{2})$/.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCFullYear`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `4738382a0f474ed04ba63cc02064b4a2e04f5140eaa89b848192b98578727e94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
