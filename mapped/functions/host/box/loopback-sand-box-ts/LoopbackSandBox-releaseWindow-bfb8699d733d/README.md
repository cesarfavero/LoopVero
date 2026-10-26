# `LoopbackSandBox.releaseWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679366-679380](../../../../../../reference/runtime/host-main.cjs#L679366-L679380) | `method` | sim | `ctx, agentId, windowIndex, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679366-679380](../../../../../../reference/runtime/host-main.cjs#L679366-L679380) | 2 | 0 | 2 | 1 | 1 | 1 |

### host:679366

Chamadas escritas diretamente neste corpo: `isPrimaryWindowIndex`, `sandBoxWindowKey`, `this.ensureReady`, `this.runStopWindow`, `this.windowConnections.delete`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `1ad109dc9626e36e9be57d06a3d752ede38285eb47a57dbe85e58a55004c3666`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
