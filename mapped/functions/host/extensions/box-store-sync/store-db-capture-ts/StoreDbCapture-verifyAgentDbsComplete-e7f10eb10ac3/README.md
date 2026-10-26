# `StoreDbCapture.verifyAgentDbsComplete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480871-480907](../../../../../../../reference/runtime/host-main.cjs#L480871-L480907) | `method` | sim | `agentsRoot, relPrefix, manifest, capturedThisSweep` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480871-480907](../../../../../../../reference/runtime/host-main.cjs#L480871-L480907) | 5 | 2 | 4 | 5 | 0 | 2 |

### host:480871

Chamadas escritas diretamente neste corpo: `entry.isDirectory`, `findSystemErrno`, `parseAgentId`, `this.bundleCapture.agentHasPendingDbRecovery`, `this.bundleCapture.isAgentDbSnapshotDurable`, `this.fs.stat`.

Alvos de atribuição ou incremento: `entries`, `fileStat`.

SHA-256 do trecho: `86fa0baae049f0fd12bd4326758409291cfc0de9c581b83a0179bbea7e6a4a59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
