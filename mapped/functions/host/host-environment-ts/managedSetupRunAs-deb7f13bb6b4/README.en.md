# `managedSetupRunAs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-environment.ts` · [Module README](../../../../modules/host/host-environment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494083-494086](../../../../../reference/runtime/host-main.cjs#L494083-L494086) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494083-494086](../../../../../reference/runtime/host-main.cjs#L494083-L494086) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494083

Calls written directly in this body: `SAND_MANAGED_SETUP_RUN_AS_VALUES.find`, `trimmedNonEmpty`.

SHA-256 of the source span: `10a37d57f060dfada188e55885f027f55730706a1316c8ee5638b393f4eddad3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
