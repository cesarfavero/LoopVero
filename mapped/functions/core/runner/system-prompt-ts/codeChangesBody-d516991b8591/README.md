# `codeChangesBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532950-532979](../../../../../../reference/runtime/sand-eval-runner.cjs#L532950-L532979) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532950-532979](../../../../../../reference/runtime/sand-eval-runner.cjs#L532950-L532979) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:532950

Chamadas escritas diretamente neste corpo: `.join`, `builtinScmAbsenceGuidance`, `greenfieldDeploymentSentences`.

SHA-256 do trecho: `a689970b6e46c42a89f29bc1a92cd24bdc5eb7c98cd7dc91eb26755ab9bfe3d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
