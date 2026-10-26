# `renderProjectDetail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-project-view.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566411-566450](../../../../../../reference/runtime/sand-eval-runner.cjs#L566411-L566450) | `FunctionDeclaration` | não | `detail, threads, nowMs, ownership` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566411-566450](../../../../../../reference/runtime/sand-eval-runner.cjs#L566411-L566450) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566411

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `cloudAgentAgeWords`, `cloudAgentNeedsAttention`, `detail.repoUrls.map`, `lines2.join`, `lines2.push`, `new Set`, `prUrls.join`, `threads.map`.

SHA-256 do trecho: `123290267e8cc8048c24721af41aacfbf914da3184f7e13d62a45b7df0c36562`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
