# `promptCacheKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533200-533260](../../../../../../reference/runtime/sand-eval-runner.cjs#L533200-L533260) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533200-533260](../../../../../../reference/runtime/sand-eval-runner.cjs#L533200-L533260) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533200

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `agentEmailUnavailableLine`, `namedRiskScopeLine`, `normalizeConnectorSearchFirstText`, `normalizeUnblockResearchWhen`, `recentChangesApplies`, `scopedSafetyChecksCopy`, `substituteConnectorClaimsLine`, `unblockResearchApplies`, `userProxyIdentityLine`.

SHA-256 do trecho: `34e842fe97e4f59247e7d9b2234ea0792d378044ac439c85fa0e82665ab51133`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
