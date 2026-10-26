# `buildSubagentRevival`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583924-583933](../../../../../../reference/runtime/sand-eval-runner.cjs#L583924-L583933) | `FunctionDeclaration` | não | `completions, context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583924-583933](../../../../../../reference/runtime/sand-eval-runner.cjs#L583924-L583933) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583924

Chamadas escritas diretamente neste corpo: `buildSubagentRevivalPrompt`, `completions.some`, `revivalInstructionOf`, `settledDelegationsOf`.

SHA-256 do trecho: `66419561410c26f5565cc6479385afe69c0edcbe210ae4914275a096f9086406`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
