# `createDiskPressureReminderEpisodes/forgetAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/disk-pressure.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679917-679924](../../../../../../../reference/runtime/host-main.cjs#L679917-L679924) | `FunctionExpression` | não | `rawAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679917-679924](../../../../../../../reference/runtime/host-main.cjs#L679917-L679924) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:679917

Chamadas escritas diretamente neste corpo: `claims.delete`, `handledAgentIds.delete`, `parseAgentId`, `pendingEpisodeIds.delete`, `persist`.

SHA-256 do trecho: `b5a26df4b1384b0b77027019f661545ff99b76d293c33e94cc865c5f9ec36759`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
