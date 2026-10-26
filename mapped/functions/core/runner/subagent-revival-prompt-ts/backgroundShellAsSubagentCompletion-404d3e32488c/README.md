# `backgroundShellAsSubagentCompletion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583839-583864](../../../../../../reference/runtime/sand-eval-runner.cjs#L583839-L583864) | `FunctionDeclaration` | não | `completion` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583839-583864](../../../../../../reference/runtime/sand-eval-runner.cjs#L583839-L583864) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583839

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `definedProvenance`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `db9bf46f45db2049ba689cfa70675e6d71230b2f7e96501f015cb89ed650b5ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
