# `inspectSandSecureFillTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727535-727617](../../../../../../../reference/runtime/host-main.cjs#L727535-L727617) | `FunctionDeclaration` | sim | `ctx, runner, args` |
| [evaluation:561990-562072](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561990-L562072) | `FunctionDeclaration` | sim | `ctx, runner, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727535-727617](../../../../../../../reference/runtime/host-main.cjs#L727535-L727617) | 22 | 0 | 5 | 14 | 0 | 0 |
| [evaluation:561990-562072](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561990-L562072) | 22 | 0 | 5 | 14 | 0 | 0 |

### host:727535

Chamadas escritas diretamente neste corpo: `completeSecureFillControl`, `createConsentedHostBelt`, `fullSnapshot`, `gateOnPlaywrightCurrentTab`, `isStaleRefDriverError`, `labelDisambiguationFor`, `playwrightTargetOf`, `resolveRoleOrdinalRef`, `resolveTargetRef`, `runner.run`, `secureFillTargetNotFound`, `withSandDriverRefNamespace`.

Alvos de atribuição ou incremento: `resolved`, `runner`.

SHA-256 do trecho: `48bc5f649270397bcaa2c010e2a26911ade6f8666caf4a4c6c986dea43866739`.

### evaluation:561990

Chamadas escritas diretamente neste corpo: `completeSecureFillControl`, `createConsentedHostBelt`, `fullSnapshot`, `gateOnPlaywrightCurrentTab`, `isStaleRefDriverError`, `labelDisambiguationFor`, `playwrightTargetOf`, `resolveRoleOrdinalRef`, `resolveTargetRef`, `runner.run`, `secureFillTargetNotFound`, `withSandDriverRefNamespace`.

Alvos de atribuição ou incremento: `resolved`, `runner`.

SHA-256 do trecho: `c9bacce9a42c3e830690c7ea73b6c134d6ca5d26c4b2f76a7da1ea11084e572a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
