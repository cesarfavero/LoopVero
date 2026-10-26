# `isAllQuietOrigin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583892-583894](../../../../../../reference/runtime/sand-eval-runner.cjs#L583892-L583894) | `FunctionDeclaration` | não | `completions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583892-583894](../../../../../../reference/runtime/sand-eval-runner.cjs#L583892-L583894) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583892

Chamadas escritas diretamente neste corpo: `completions.every`.

SHA-256 do trecho: `9c59c66eb70ad47459ca91c7cf171c56a1456d520312879513c64f68cd11c64d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
