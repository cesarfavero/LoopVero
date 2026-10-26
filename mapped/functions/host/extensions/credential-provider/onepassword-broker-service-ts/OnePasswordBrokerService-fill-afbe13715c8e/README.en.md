# `OnePasswordBrokerService.fill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551078-551194](../../../../../../../reference/runtime/host-main.cjs#L551078-L551194) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551078-551194](../../../../../../../reference/runtime/host-main.cjs#L551078-L551194) | 18 | 0 | 10 | 13 | 0 | 0 |

### host:551078

Calls written directly in this body: `.find`, `activeTabs.filter`, `asyncMapValues`, `browserWindowIndexOfCdpPort`, `fail3`, `new URL`, `onSite.filter`, `ports.filter`, `reportsStaleReference`, `resolved.flatMap`, `resolved.some`, `this.discoverPorts`, `this.grants.dropExpired`, `this.grants.get`, `this.grants.remove`, `this.grantsReady`, `this.now`, `this.options.audit`, `this.options.leasedFill.run`, `this.sessionMaterial`, `this.windowFor`, `unavailableDiagnostics`.

Assignment or increment targets: `material`.

SHA-256 of the source span: `aa2307b9a163bfdcb024fee5876dcd725e3820d12831f91abe96a9a611022c7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
