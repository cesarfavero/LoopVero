# `withAtlassianCloudId/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/atlassian-cloud-id.ts` · [README do módulo](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:579058-579096](../../../../../../reference/runtime/sand-eval-runner.cjs#L579058-L579096) | `FunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579058-579096](../../../../../../reference/runtime/sand-eval-runner.cjs#L579058-L579096) | 8 | 0 | 3 | 8 | 0 | 0 |

### evaluation:579058

Chamadas escritas diretamente neste corpo: `.includes`, `Value.fromJson`, `args.clone`, `atlassianCloudIdFill.applied`, `atlassianCloudIdFill.refused`, `ctx.get`, `executor.execute`, `lacksCloudId`, `logShimFiring`, `lookupFailedRefusal`, `refuse2`, `refusedResult`, `severalSitesRefusal`, `sites.result.clone`, `sitesOf`.

Alvos de atribuição ou incremento: `filled.args[computed]`.

SHA-256 do trecho: `5f8e9e9ab2ffc999bec2993cb8954f80144b2059486ffb0fc69fff72b447a596`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
