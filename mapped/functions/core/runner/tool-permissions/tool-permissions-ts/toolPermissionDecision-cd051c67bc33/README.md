# `toolPermissionDecision`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-permissions/tool-permissions.ts` · [README do módulo](../../../../../../modules/core/runner/tool-permissions/tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:579312-579325](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579312-L579325) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579312-579325](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579312-L579325) | 7 | 0 | 0 | 4 | 0 | 0 |

### evaluation:579312

Chamadas escritas diretamente neste corpo: `mcpServerPermissionScope`, `toolBlockedReason`.

SHA-256 do trecho: `89145b2d0ab1b37affe5631cc15cfdeacf1b7f6e0e3cad69484b18741bd180b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
