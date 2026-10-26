# `sameFormWindowIsOrdered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759120-759129](../../../../../../reference/runtime/host-main.cjs#L759120-L759129) | `FunctionDeclaration` | no | `{   from: from2,   to: to3 }` |
| [evaluation:549280-549289](../../../../../../reference/runtime/sand-eval-runner.cjs#L549280-L549289) | `FunctionDeclaration` | no | `{   from: from2,   to: to3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759120-759129](../../../../../../reference/runtime/host-main.cjs#L759120-L759129) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:549280-549289](../../../../../../reference/runtime/sand-eval-runner.cjs#L549280-L549289) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:759120

Calls written directly in this body: `Date.parse`, `boundFormOf`.

SHA-256 of the source span: `e27b6f03ab1b40d55aeed2afde76a5e962329330010aad0c81e10927ac31fab5`.

### evaluation:549280

Calls written directly in this body: `Date.parse`, `boundFormOf`.

SHA-256 of the source span: `e27b6f03ab1b40d55aeed2afde76a5e962329330010aad0c81e10927ac31fab5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
