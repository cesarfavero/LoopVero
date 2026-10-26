# `renderMemorySystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537951-537956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537951-L537956) | `FunctionDeclaration` | não | `recall2, location, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537951-537956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537951-L537956) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537951

Chamadas escritas diretamente neste corpo: `.join`, `memoryRecallHasFacts`, `renderMemoryFactSnapshot`, `renderMemoryPolicyPrompt`.

SHA-256 do trecho: `d8d5eec893738bf474e1546d773366cff0973e70124b6f954012b813bfdf8012`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
