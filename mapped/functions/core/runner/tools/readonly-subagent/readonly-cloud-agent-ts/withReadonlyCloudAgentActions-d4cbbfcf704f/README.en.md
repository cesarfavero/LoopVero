# `withReadonlyCloudAgentActions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777801-777816](../../../../../../../../reference/runtime/host-main.cjs#L777801-L777816) | `FunctionDeclaration` | no | `tool` |
| [evaluation:577496-577511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577496-L577511) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777801-777816](../../../../../../../../reference/runtime/host-main.cjs#L777801-L777816) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577496-577511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577496-L577511) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777801

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a1d0ba9bc624beb6b23120328c7345220571bb24695671160003f5e3c49aab20`.

### evaluation:577496

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d4b0ce658f1faccee0cfccb1244a638382830f1cfc6c3f8317a570a1c6be32fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
