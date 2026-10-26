# `describeScmToolError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-tool-error-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585827-585856](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585827-L585856) | `FunctionDeclaration` | sim | `error63, toolName, readPortalBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585827-585856](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585827-L585856) | 9 | 0 | 0 | 7 | 0 | 0 |

### evaluation:585827

Chamadas escritas diretamente neste corpo: `describeOriginToolError`, `describeScmConnectBlocker`, `describeScmOrgBlocked`, `repoUrlFor`, `scmProviderOf`.

SHA-256 do trecho: `05dc86e2b5e7379f11a80531b0477d05189c32c80621e4cac7f55ee38b3a1f40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
