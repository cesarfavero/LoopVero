# `readCloudAgentProjectTrees`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-projects.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566556-566566](../../../../../../reference/runtime/sand-eval-runner.cjs#L566556-L566566) | `FunctionDeclaration` | sim | `api, rows` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566556-566566](../../../../../../reference/runtime/sand-eval-runner.cjs#L566556-L566566) | 3 | 0 | 1 | 5 | 0 | 1 |

### evaluation:566556

Chamadas escritas diretamente neste corpo: `.map`, `api.listProjectTrees`, `classifyReadFailure2`, `isProjectTreeReadTurnedOff`, `new Map`, `rows.filter`.

SHA-256 do trecho: `aef0eb48d55d3d51774e6f1fcb571fe1e74039a9f2f5bd0285a9f654f6911648`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
