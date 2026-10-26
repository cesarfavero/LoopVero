# `createHostRosterBookkeeping/apply`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-roster-bookkeeping.ts` · [README do módulo](../../../../modules/host/host-roster-bookkeeping-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786309-786333](../../../../../reference/runtime/host-main.cjs#L786309-L786333) | `FunctionExpression` | não | `activeAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786309-786333](../../../../../reference/runtime/host-main.cjs#L786309-L786333) | 5 | 1 | 0 | 0 | 0 | 0 |

### host:786309

Chamadas escritas diretamente neste corpo: `.catch`, `.filter`, `.getOrCreate`, `.liveRunningAgentIds`, `.scheduleWarm`, `.setBusy`, `.setFallbackAgentId`, `.setRunningAgentIds`, `boxStore.scheduleStoreDbSnapshot`, `extensions.api`, `new Set`, `reminders.enroll`, `runningAgentIds.has`.

Alvos de atribuição ou incremento: `isBusy`, `latestActiveAgentId`, `runningAgentIds`.

SHA-256 do trecho: `23181df2075194c694cf68f819d35607ad889d608c0a30b64f72ae5098af547d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
