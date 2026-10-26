# `LoopbackSandBox.windowOwnedBy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679398-679408](../../../../../../reference/runtime/host-main.cjs#L679398-L679408) | `method` | sim | `ctx, agentId, windowIndex, ownerToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679398-679408](../../../../../../reference/runtime/host-main.cjs#L679398-L679408) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:679398

Chamadas escritas diretamente neste corpo: `sandBoxWindowKey`, `this.ensureReady`, `this.runWindowOwnerCheck`, `this.windowConnections.delete`.

SHA-256 do trecho: `d5f1b3032e6816c7a2bb83c07d9e88e38fa0e907e7ca99a1cf7bbdbfa582c015`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
