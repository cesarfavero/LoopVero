# `SandMcpManager.listBoxForDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689589-689614](../../../../../../../reference/runtime/host-main.cjs#L689589-L689614) | `method` | não | `boxRuntime, visible, isCurrent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689589-689614](../../../../../../../reference/runtime/host-main.cjs#L689589-L689614) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:689589

Chamadas escritas diretamente neste corpo: `.map`, `.then`, `stdioDisplayServers`, `this.listingCache.listBox`.

SHA-256 do trecho: `73edb9370cc2c612939bc66fad430cd08366d42ee286e4176061d9ea76b7be97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
