# `isEventTime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759197-759203](../../../../../../reference/runtime/host-main.cjs#L759197-L759203) | `FunctionDeclaration` | no | `value` |
| [evaluation:549357-549363](../../../../../../reference/runtime/sand-eval-runner.cjs#L549357-L549363) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759197-759203](../../../../../../reference/runtime/host-main.cjs#L759197-L759203) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549357-549363](../../../../../../reference/runtime/sand-eval-runner.cjs#L549357-L549363) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:759197

Calls written directly in this body: `Date.UTC`, `Date.parse`, `ISO_DATE_OR_DATE_TIME3.exec`, `Number`, `Number.isNaN`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `a11b8f9a292a211ec33b40c43852e0cc1db4b2f331c657268fed3ffd24ded677`.

### evaluation:549357

Calls written directly in this body: `Date.UTC`, `Date.parse`, `ISO_DATE_OR_DATE_TIME3.exec`, `Number`, `Number.isNaN`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `a11b8f9a292a211ec33b40c43852e0cc1db4b2f331c657268fed3ffd24ded677`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
