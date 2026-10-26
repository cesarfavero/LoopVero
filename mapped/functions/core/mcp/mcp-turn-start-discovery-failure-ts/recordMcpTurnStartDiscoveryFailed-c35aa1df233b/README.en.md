# `recordMcpTurnStartDiscoveryFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-turn-start-discovery-failure.ts` · [Module README](../../../../../modules/core/mcp/mcp-turn-start-discovery-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588944-588962](../../../../../../reference/runtime/sand-eval-runner.cjs#L588944-L588962) | `FunctionDeclaration` | no | `ctx, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588944-588962](../../../../../../reference/runtime/sand-eval-runner.cjs#L588944-L588962) | 2 | 1 | 0 | 0 | 0 | 0 |

### evaluation:588944

Calls written directly in this body: `diagnosticForWait`, `errorLogTag`, `failures.increment`, `metricApi`, `metricCause`, `reportHostDiagnosticOrStderr`, `snapshotMcpTurnStartDiscoveryWaits`.

SHA-256 of the source span: `fb578c2f6216937fff7649268e7fb8e36cf688b609ae3435043219aa2245a5d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
