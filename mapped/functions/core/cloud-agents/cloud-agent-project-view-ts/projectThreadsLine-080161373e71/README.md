# `projectThreadsLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-project-view.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566375-566389](../../../../../../reference/runtime/sand-eval-runner.cjs#L566375-L566389) | `FunctionDeclaration` | não | `tree, failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566375-566389](../../../../../../reference/runtime/sand-eval-runner.cjs#L566375-L566389) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:566375

Chamadas escritas diretamente neste corpo: `.map`, `parts.join`, `tree.counts.filter`, `tree.counts.reduce`, `tree.nodes.filter`.

SHA-256 do trecho: `6bf2b6057361829d6eb30a18d536b93118281b557cee2352f5777d7ab0d36274`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
