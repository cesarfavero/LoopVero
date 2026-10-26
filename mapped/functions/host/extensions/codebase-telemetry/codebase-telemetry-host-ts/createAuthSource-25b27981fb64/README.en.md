# `createAuthSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540905-540952](../../../../../../../reference/runtime/host-main.cjs#L540905-L540952) | `FunctionDeclaration` | no | `{   auth: auth2,   logger: logger132 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540905-540952](../../../../../../../reference/runtime/host-main.cjs#L540905-L540952) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540905

Calls written directly in this body: `auth2.subscribeToRenewal`, `createWatchChannel`, `pushCredential`.

SHA-256 of the source span: `2ae464dad220b00142ae7db81daf0b77583e2ad0761f81939ff664e068b5d6d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
