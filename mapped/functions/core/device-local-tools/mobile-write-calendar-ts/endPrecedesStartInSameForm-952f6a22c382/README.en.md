# `endPrecedesStartInSameForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759211-759216](../../../../../../reference/runtime/host-main.cjs#L759211-L759216) | `FunctionDeclaration` | no | `{ start, end }` |
| [evaluation:549371-549376](../../../../../../reference/runtime/sand-eval-runner.cjs#L549371-L549376) | `FunctionDeclaration` | no | `{ start, end }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759211-759216](../../../../../../reference/runtime/host-main.cjs#L759211-L759216) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:549371-549376](../../../../../../reference/runtime/sand-eval-runner.cjs#L549371-L549376) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:759211

Calls written directly in this body: `Date.parse`, `timeFormOf`.

SHA-256 of the source span: `db7be38f7d4a342cf8b0be75eb09211bbfb28ed7801e506bed20050d551a5e3a`.

### evaluation:549371

Calls written directly in this body: `Date.parse`, `timeFormOf`.

SHA-256 of the source span: `db7be38f7d4a342cf8b0be75eb09211bbfb28ed7801e506bed20050d551a5e3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
