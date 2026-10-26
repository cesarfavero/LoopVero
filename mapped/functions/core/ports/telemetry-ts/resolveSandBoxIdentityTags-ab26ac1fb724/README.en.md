# `resolveSandBoxIdentityTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `core/ports/telemetry.ts` · [Module README](../../../../../modules/core/ports/telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:450971-450973](../../../../../../reference/runtime/host-main.cjs#L450971-L450973) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:450971-450973](../../../../../../reference/runtime/host-main.cjs#L450971-L450973) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:450971

Calls written directly in this body: `readSandBoxPodEnv`.

SHA-256 of the source span: `f9fe0bb147d91a1e8ea473f53808e43efd19f77d1b6b20e4d611e67c44eb60e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
