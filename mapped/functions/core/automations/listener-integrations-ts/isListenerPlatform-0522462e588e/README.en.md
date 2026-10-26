# `isListenerPlatform`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/listener-integrations.ts` · [Module README](../../../../../modules/core/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505146-505148](../../../../../../reference/runtime/host-main.cjs#L505146-L505148) | `FunctionDeclaration` | no | `value` |
| [evaluation:570007-570009](../../../../../../reference/runtime/sand-eval-runner.cjs#L570007-L570009) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505146-505148](../../../../../../reference/runtime/host-main.cjs#L505146-L505148) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570007-570009](../../../../../../reference/runtime/sand-eval-runner.cjs#L570007-L570009) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505146

Calls written directly in this body: `LISTENER_INTEGRATION_PLATFORMS.some`.

SHA-256 of the source span: `c3bcbe417adadcd1b2bfb85c907af3b6a8fd8070db4591a215fd17db3531bff6`.

### evaluation:570007

Calls written directly in this body: `LISTENER_INTEGRATION_PLATFORMS.some`.

SHA-256 of the source span: `85a541590732839e11fdb54641bd33a284fd618c3476b257646e8cd8fed9d863`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
