# `createDiskPressureReminderEpisodes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/disk-pressure.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679801-679959](../../../../../../../reference/runtime/host-main.cjs#L679801-L679959) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679801-679959](../../../../../../../reference/runtime/host-main.cjs#L679801-L679959) | 10 | 2 | 0 | 1 | 1 | 1 |

### host:679801

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `enqueue`, `handledAgentIds.add`, `isUnknownRecord2`, `new Map`, `new SandDiskPressureLedgerError`, `new Set`, `options2.onLedgerError`, `parseAgentId`, `readLedgerText`.

Alvos de atribuição ou incremento: `activeEpisodeId`, `restoredEpisodeAwaitingPressure`.

Alvos de lançamento explícito: `SandDiskPressureLedgerError`.

SHA-256 do trecho: `a2788a77cff246dd961003832c5324a3691cefbc9679c1753953439aa1604fb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
