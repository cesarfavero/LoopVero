# `repolessGuidanceBullets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud/no-repository-access.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/cloud/no-repository-access-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:635732-635742](../../../../../../../reference/runtime/host-main.cjs#L635732-L635742) | `FunctionDeclaration` | não | `variant` |
| [evaluation:423790-423800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423790-L423800) | `FunctionDeclaration` | não | `variant` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635732-635742](../../../../../../../reference/runtime/host-main.cjs#L635732-L635742) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:423790-423800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423790-L423800) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:635732

Chamadas escritas diretamente neste corpo: `noRepositoryAccessBullets`, `selfHostedRepositoryBootstrapBullets`.

SHA-256 do trecho: `a84ac1d68d47d000ed7e230297ef10677cfa68065d86c9ba5c86384b31ade601`.

### evaluation:423790

Chamadas escritas diretamente neste corpo: `noRepositoryAccessBullets`, `selfHostedRepositoryBootstrapBullets`.

SHA-256 do trecho: `a84ac1d68d47d000ed7e230297ef10677cfa68065d86c9ba5c86384b31ade601`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
