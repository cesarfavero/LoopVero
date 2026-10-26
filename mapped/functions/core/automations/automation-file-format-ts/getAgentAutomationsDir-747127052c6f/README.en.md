# `getAgentAutomationsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716461-716463](../../../../../../reference/runtime/host-main.cjs#L716461-L716463) | `FunctionDeclaration` | no | `agentDir` |
| [evaluation:627175-627177](../../../../../../reference/runtime/sand-eval-runner.cjs#L627175-L627177) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716461-716463](../../../../../../reference/runtime/host-main.cjs#L716461-L716463) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627175-627177](../../../../../../reference/runtime/sand-eval-runner.cjs#L627175-L627177) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716461

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `156e2e11dd4854829c33bb84cc9b1a8c83115fec6b05485f36bd883b1d851acc`.

### evaluation:627175

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `616846be9e2199fc5be9152dffa12ebb408b8b04c90763f0ef9f26cd2ad69aae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
