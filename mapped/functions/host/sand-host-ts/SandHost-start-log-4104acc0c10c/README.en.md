# `SandHost.start/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786445-786445](../../../../../reference/runtime/host-main.cjs#L786445-L786445) | `ArrowFunctionExpression` | no | `message, level = "info"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786445-786445](../../../../../reference/runtime/host-main.cjs#L786445-L786445) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786445 uses an implicit arrow-function return.

### host:786445

Calls written directly in this body: `processOutput.print`.

SHA-256 of the source span: `ee04cd06b0e0b3a58165630ab53f783a56330081ebcfe49f7929921e838dcce0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
