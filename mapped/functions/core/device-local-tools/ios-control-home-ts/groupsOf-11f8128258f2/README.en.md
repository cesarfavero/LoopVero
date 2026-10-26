# `groupsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758728-758739](../../../../../../reference/runtime/host-main.cjs#L758728-L758739) | `FunctionDeclaration` | no | `changes, keyOf` |
| [evaluation:548888-548899](../../../../../../reference/runtime/sand-eval-runner.cjs#L548888-L548899) | `FunctionDeclaration` | no | `changes, keyOf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758728-758739](../../../../../../reference/runtime/host-main.cjs#L758728-L758739) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:548888-548899](../../../../../../reference/runtime/sand-eval-runner.cjs#L548888-L548899) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:758728

Calls written directly in this body: `groups.get`, `groups.set`, `groups.values`, `keyOf`, `new Map`.

SHA-256 of the source span: `6cd54226633414dad497a8ef700878de7ed08bc4c75ac56a2461fde7a04d9e58`.

### evaluation:548888

Calls written directly in this body: `groups.get`, `groups.set`, `groups.values`, `keyOf`, `new Map`.

SHA-256 of the source span: `6cd54226633414dad497a8ef700878de7ed08bc4c75ac56a2461fde7a04d9e58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
