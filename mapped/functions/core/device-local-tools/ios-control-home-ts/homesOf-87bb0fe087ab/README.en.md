# `homesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758758-758761](../../../../../../reference/runtime/host-main.cjs#L758758-L758761) | `FunctionDeclaration` | no | `changes` |
| [evaluation:548918-548921](../../../../../../reference/runtime/sand-eval-runner.cjs#L548918-L548921) | `FunctionDeclaration` | no | `changes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758758-758761](../../../../../../reference/runtime/host-main.cjs#L758758-L758761) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548918-548921](../../../../../../reference/runtime/sand-eval-runner.cjs#L548918-L548921) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:758758

Calls written directly in this body: `changes.flatMap`, `homes.map`, `listOf3`, `new Set`.

SHA-256 of the source span: `4f68e00d7056f09abbe94c90cf58de2cebe5eed0d2e3459d317222c8489acc1a`.

### evaluation:548918

Calls written directly in this body: `changes.flatMap`, `homes.map`, `listOf3`, `new Set`.

SHA-256 of the source span: `4f68e00d7056f09abbe94c90cf58de2cebe5eed0d2e3459d317222c8489acc1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
