# `createNeedsAuthCards/surfaceNeedsAuthCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-cards.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585033-585049](../../../../../../reference/runtime/sand-eval-runner.cjs#L585033-L585049) | `FunctionExpression` | sim | `providerIdentifier, result, probes, holdFollowUp = false, cardSource` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585033-585049](../../../../../../reference/runtime/sand-eval-runner.cjs#L585033-L585049) | 3 | 0 | 3 | 3 | 0 | 0 |

### evaluation:585033

Chamadas escritas diretamente neste corpo: `canSurface`, `liveNeedsAuthNote`, `mcp.resolveNeedsAuthSlot`, `surfaceSlotCard`.

SHA-256 do trecho: `a352147c043d652077cd781a35f0f857e2c2001871243988a1b9e11a51683d40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
