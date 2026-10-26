# `describePluginDetail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779867-779892](../../../../../../../reference/runtime/host-main.cjs#L779867-L779892) | `FunctionDeclaration` | no | `detail, statuses` |
| [evaluation:580105-580130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580105-L580130) | `FunctionDeclaration` | no | `detail, statuses` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779867-779892](../../../../../../../reference/runtime/host-main.cjs#L779867-L779892) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580105-580130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580105-L580130) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:779867

Calls written directly in this body: `.join`, `describePluginConnectorType`, `describePluginFields`, `describePluginIncludes`, `describePluginInstallState`, `describePluginServers`, `detail.skills.map`, `sections.join`, `sections.push`.

SHA-256 of the source span: `75019692e9025c6eaecd268e0612568b9a72722611ade1c240440f88450e199a`.

### evaluation:580105

Calls written directly in this body: `.join`, `describePluginConnectorType`, `describePluginFields`, `describePluginIncludes`, `describePluginInstallState`, `describePluginServers`, `detail.skills.map`, `sections.join`, `sections.push`.

SHA-256 of the source span: `75019692e9025c6eaecd268e0612568b9a72722611ade1c240440f88450e199a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
