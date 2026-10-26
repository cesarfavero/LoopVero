# `SandMcpInstructionsAndToggles.setServerCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688448-688464](../../../../../../../reference/runtime/host-main.cjs#L688448-L688464) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688448-688464](../../../../../../../reference/runtime/host-main.cjs#L688448-L688464) | 1 | 0 | 2 | 1 | 1 | 0 |

### host:688448

Calls written directly in this body: `.filter`, `.setMcpCustomInstructionByServerId`, `new SandMcpConfigError`, `this.deps.lastAccountDisplayConfig`, `this.deps.listServers`, `this.deps.resolveListedDisplayServer`, `this.deps.settingsStore`, `validateMcpDisplayServerId`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `cd19f09caf41f45b66eec7afc1268149c13cbc1ee32948607682ca243b6ed793`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
