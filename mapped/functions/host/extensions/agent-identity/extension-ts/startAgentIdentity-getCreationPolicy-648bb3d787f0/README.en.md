# `startAgentIdentity/getCreationPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496600-496612](../../../../../../../reference/runtime/host-main.cjs#L496600-L496612) | `ArrowFunctionExpression` | yes | `signal = lifetime.signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496600-496612](../../../../../../../reference/runtime/host-main.cjs#L496600-L496612) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:496600

Calls written directly in this body: `applyReads`, `capabilitiesDeadline.run`.

SHA-256 of the source span: `a0d9135fdbe7e5900f2489352c743d3762854f6ae963a7b8d827a18d17df2c7f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
