# `clampToMax`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496392-496394](../../../../../../../reference/runtime/host-main.cjs#L496392-L496394) | `FunctionDeclaration` | no | `value, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496392-496394](../../../../../../../reference/runtime/host-main.cjs#L496392-L496394) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:496392

Calls written directly in this body: `value.slice`.

SHA-256 of the source span: `8c56c7f060c60fbbaecd0d00fad3d55192cccf7548d681f4fd6caa2c8ba2d569`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
