# `installRefusingPrivateTailnet`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780068-780079](../../../../../../../reference/runtime/host-main.cjs#L780068-L780079) | `FunctionDeclaration` | yes | `install` |
| [evaluation:580313-580324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580313-L580324) | `FunctionDeclaration` | yes | `install` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780068-780079](../../../../../../../reference/runtime/host-main.cjs#L780068-L780079) | 1 | 0 | 1 | 2 | 1 | 1 |
| [evaluation:580313-580324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580313-L580324) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:780068

Calls written directly in this body: `install`, `tailnetPluginInstallRefusalOf`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b4ae7a3ad8d30db809189a3125054c217e3ed97bbee61bffca16fb65d25c0635`.

### evaluation:580313

Calls written directly in this body: `install`, `tailnetPluginInstallRefusalOf`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `a65f0ab4b7116849fee05598797a65cac30ac6f2c4578b2d1dbf36655511e763`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
