# `describeScmOrgBlocked`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-tool-error-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585857-585863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585857-L585863) | `FunctionDeclaration` | não | `error63, provider, blockedAction` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585857-585863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585857-L585863) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585857

Chamadas escritas diretamente neste corpo: `error63.repo.split`, `scmProviderDisplayName`.

SHA-256 do trecho: `4fd6de48aadbdda15553b0727ea5da506328702d38a5577bccb7dcd78208058c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
