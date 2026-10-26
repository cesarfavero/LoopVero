# `calledAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777782-777790](../../../../../../../../reference/runtime/host-main.cjs#L777782-L777790) | `FunctionDeclaration` | no | `rawArgs` |
| [evaluation:577477-577485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577477-L577485) | `FunctionDeclaration` | no | `rawArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777782-777790](../../../../../../../../reference/runtime/host-main.cjs#L777782-L777790) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:577477-577485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577477-L577485) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:777782

Calls written directly in this body: `JSON.parse`, `cloudAgentCall.safeParse`.

SHA-256 of the source span: `fff6c7cb8011903990448600a6cfd87358c8618f4bd9e20f9b39598fa866e361`.

### evaluation:577477

Calls written directly in this body: `JSON.parse`, `cloudAgentCall.safeParse`.

SHA-256 of the source span: `cfc1998aa46d8a37c9762af6d706ab104c5faedc1a54f59c92cae9fcdcd3daed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
