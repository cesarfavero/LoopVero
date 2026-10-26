# `isTruthyEnv`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-config.ts` · [Module README](../../../../modules/host/gateway-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483848-483852](../../../../../reference/runtime/host-main.cjs#L483848-L483852) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483848-483852](../../../../../reference/runtime/host-main.cjs#L483848-L483852) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:483848

Calls written directly in this body: `.toLowerCase`, `value.trim`.

SHA-256 of the source span: `f3b33cb58543b6efe15ef59ec4582f410517ad27c6d7e0790b5f2f0a592712a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
