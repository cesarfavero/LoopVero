# `LoopbackSandBox.parkWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679381-679393](../../../../../../reference/runtime/host-main.cjs#L679381-L679393) | `method` | sim | `ctx, agentId, windowIndex, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679381-679393](../../../../../../reference/runtime/host-main.cjs#L679381-L679393) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:679381

Chamadas escritas diretamente neste corpo: `isPrimaryWindowIndex`, `sandBoxWindowKey`, `this.ensureReady`, `this.runParkWindow`, `this.windowConnections.delete`.

SHA-256 do trecho: `670a62cecbbb656564c6faf8b9a2dfa37a5817c2ec6f191edcc032342d012c89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
