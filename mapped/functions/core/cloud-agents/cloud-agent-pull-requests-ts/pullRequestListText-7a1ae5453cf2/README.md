# `pullRequestListText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566697-566702](../../../../../../reference/runtime/sand-eval-runner.cjs#L566697-L566702) | `FunctionDeclaration` | sim | `api, limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566697-566702](../../../../../../reference/runtime/sand-eval-runner.cjs#L566697-L566702) | 1 | 0 | 1 | 2 | 0 | 0 |

### evaluation:566697

Chamadas escritas diretamente neste corpo: `api.listPullRequests`, `renderCloudAgentPullRequests`.

SHA-256 do trecho: `bef9719178dcb19845b6db6239cd8ae5a67d8b7861f6f6c48c312c9ffa25b949`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
