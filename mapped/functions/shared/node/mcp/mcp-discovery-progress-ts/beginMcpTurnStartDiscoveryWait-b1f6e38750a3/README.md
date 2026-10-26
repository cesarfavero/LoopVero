# `beginMcpTurnStartDiscoveryWait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-discovery-progress.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-discovery-progress-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690628-690636](../../../../../../../reference/runtime/host-main.cjs#L690628-L690636) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690628-690636](../../../../../../../reference/runtime/host-main.cjs#L690628-L690636) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:690628

Chamadas escritas diretamente neste corpo: `progress.begin`, `progressStore.getStore`, `uniqueBoundedConnectors`.

SHA-256 do trecho: `b4660243ca4b89b87ba7f387ee1c7dc2f152eddd5b5f316f1961b98fd595f214`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
