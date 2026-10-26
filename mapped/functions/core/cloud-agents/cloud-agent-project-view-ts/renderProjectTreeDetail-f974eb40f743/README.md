# `renderProjectTreeDetail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-project-view.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566451-566483](../../../../../../reference/runtime/sand-eval-runner.cjs#L566451-L566483) | `FunctionDeclaration` | não | `detail, trees, nowMs, ownership` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566451-566483](../../../../../../reference/runtime/sand-eval-runner.cjs#L566451-L566483) | 10 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566451

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `cloudAgentAgeWords`, `cloudAgentNeedsAttention`, `detail.repoUrls.map`, `lines2.join`, `lines2.push`, `new Set`, `omittedLines`, `prUrls.join`, `projectThreadsLine`, `tree.nodes.map`, `trees.trees.get`, `withSubagentsStatus`.

SHA-256 do trecho: `12166f5f2bf6f4685cc47ff20f200e459dee4bbd091674d2bdbafa33fb7d2f36`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
