# `createNeedsAuthCards/surfacePendingSignInCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-cards.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585050-585058](../../../../../../reference/runtime/sand-eval-runner.cjs#L585050-L585058) | `FunctionExpression` | sim | `providerIdentifier, settled, probes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585050-585058](../../../../../../reference/runtime/sand-eval-runner.cjs#L585050-L585058) | 4 | 0 | 2 | 5 | 0 | 0 |

### evaluation:585050

Chamadas escritas diretamente neste corpo: `canSurface`, `mcp.resolvePendingSignInSlot`, `probes.probed`, `surfaceSlotCard`.

SHA-256 do trecho: `b614924cc8ed8d5f75cdc105213bcbc020a5a0a0b27d9a9a88bccac03d808283`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
