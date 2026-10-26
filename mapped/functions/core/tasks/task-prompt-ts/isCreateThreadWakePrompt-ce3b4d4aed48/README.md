# `isCreateThreadWakePrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/tasks/task-prompt.ts` · [README do módulo](../../../../../modules/core/tasks/task-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538902-538904](../../../../../../reference/runtime/sand-eval-runner.cjs#L538902-L538904) | `FunctionDeclaration` | não | `prompt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538902-538904](../../../../../../reference/runtime/sand-eval-runner.cjs#L538902-L538904) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538902

Chamadas escritas diretamente neste corpo: `prompt.startsWith`.

SHA-256 do trecho: `9f17362679356d30bf27c45fbe7123335e66a14e8696a753313b50cc64c20c4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
