# `teamAccessTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/team-access-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781688-781713](../../../../../../../../reference/runtime/host-main.cjs#L781688-L781713) | `FunctionDeclaration` | no | `host, onSendMessage, completeTurn` |
| [evaluation:582035-582060](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582035-L582060) | `FunctionDeclaration` | no | `host, onSendMessage, completeTurn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781688-781713](../../../../../../../../reference/runtime/host-main.cjs#L781688-L781713) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582035-582060](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582035-L582060) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:781688

Calls written directly in this body: `createOfferSlackConnectTool`, `createOfferTeamAccessTool`, `createTeamConversionTool`, `host.gates.teamAccessCards`, `host.teamBot`.

SHA-256 of the source span: `fb2d7c99c470a217ead04f3d054806a0218470d840040e826c34c378ca811c84`.

### evaluation:582035

Calls written directly in this body: `createOfferSlackConnectTool`, `createOfferTeamAccessTool`, `createTeamConversionTool`, `host.gates.teamAccessCards`, `host.teamBot`.

SHA-256 of the source span: `fb2d7c99c470a217ead04f3d054806a0218470d840040e826c34c378ca811c84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
