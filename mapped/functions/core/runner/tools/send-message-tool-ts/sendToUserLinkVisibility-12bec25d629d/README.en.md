# `sendToUserLinkVisibility`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761154-761161](../../../../../../../reference/runtime/host-main.cjs#L761154-L761161) | `FunctionDeclaration` | no | `deps` |
| [evaluation:551969-551976](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551969-L551976) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761154-761161](../../../../../../../reference/runtime/host-main.cjs#L761154-L761161) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551969-551976](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551969-L551976) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761154

Calls written directly in this body: `deps.boxEgressTunnel`, `deps.chromeCookieImport`, `deps.meetings`, `sandUiMapVisibility`.

SHA-256 of the source span: `4251e1cc4e47f5c3a7f987e3622406c566cc2cad688712140050b054cbd8cf4a`.

### evaluation:551969

Calls written directly in this body: `deps.boxEgressTunnel`, `deps.chromeCookieImport`, `deps.meetings`, `sandUiMapVisibility`.

SHA-256 of the source span: `4251e1cc4e47f5c3a7f987e3622406c566cc2cad688712140050b054cbd8cf4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
