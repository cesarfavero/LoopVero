# `locationChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759338-759340](../../../../../../reference/runtime/host-main.cjs#L759338-L759340) | `FunctionDeclaration` | no | `location2` |
| [evaluation:549498-549500](../../../../../../reference/runtime/sand-eval-runner.cjs#L549498-L549500) | `FunctionDeclaration` | no | `location` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759338-759340](../../../../../../reference/runtime/host-main.cjs#L759338-L759340) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549498-549500](../../../../../../reference/runtime/sand-eval-runner.cjs#L549498-L549500) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759338

Calls written directly in this body: `isBlank`.

SHA-256 of the source span: `271ac5fac4210e03011ed4d6f2e4b65313876a5935e3156bf5df1a621046920b`.

### evaluation:549498

Calls written directly in this body: `isBlank`.

SHA-256 of the source span: `c251506a0b408c8c1252788ea2d6c01403f0dbf8f6abf0fe40135361f51ba6e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
