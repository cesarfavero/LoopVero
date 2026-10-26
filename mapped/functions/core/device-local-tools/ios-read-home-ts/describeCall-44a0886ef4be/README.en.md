# `describeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-read-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-read-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758849-758854](../../../../../../reference/runtime/host-main.cjs#L758849-L758854) | `ArrowFunctionExpression` | no | `input2` |
| [evaluation:549009-549014](../../../../../../reference/runtime/sand-eval-runner.cjs#L549009-L549014) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758849-758854](../../../../../../reference/runtime/host-main.cjs#L758849-L758854) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549009-549014](../../../../../../reference/runtime/sand-eval-runner.cjs#L549009-L549014) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:758849

Calls written directly in this body: `readHomeParameters.safeParse`.

SHA-256 of the source span: `7e0e5f353372c1d0a4bf14c7fe399fb68185e06ae15c2ce86bdf9632617d189c`.

### evaluation:549009

Calls written directly in this body: `readHomeParameters.safeParse`.

SHA-256 of the source span: `39db3c419d3fbec9fda512c12f0a4111b6c52548d5d0c19bb58b22f99b79031b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
