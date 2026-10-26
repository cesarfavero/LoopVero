# `toPathOnlySkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639452-639454](../../../../../../reference/runtime/host-main.cjs#L639452-L639454) | `FunctionDeclaration` | não | `skills, isProtected` |
| [evaluation:430042-430044](../../../../../../reference/runtime/sand-eval-runner.cjs#L430042-L430044) | `FunctionDeclaration` | não | `skills, isProtected` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639452-639454](../../../../../../reference/runtime/host-main.cjs#L639452-L639454) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430042-430044](../../../../../../reference/runtime/sand-eval-runner.cjs#L430042-L430044) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639452

Chamadas escritas diretamente neste corpo: `skills.map`.

SHA-256 do trecho: `1bd697a749182206dcc1d7fa921fd871951aaf1e1eaacead2e1e6c5e160d0047`.

### evaluation:430042

Chamadas escritas diretamente neste corpo: `skills.map`.

SHA-256 do trecho: `1bd697a749182206dcc1d7fa921fd871951aaf1e1eaacead2e1e6c5e160d0047`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
