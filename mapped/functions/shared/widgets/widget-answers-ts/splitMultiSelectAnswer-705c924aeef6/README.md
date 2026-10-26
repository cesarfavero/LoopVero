# `splitMultiSelectAnswer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/widgets/widget-answers.ts` · [README do módulo](../../../../../modules/shared/widgets/widget-answers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706690-706692](../../../../../../reference/runtime/host-main.cjs#L706690-L706692) | `FunctionDeclaration` | não | `answer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706690-706692](../../../../../../reference/runtime/host-main.cjs#L706690-L706692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706690

Chamadas escritas diretamente neste corpo: `answer.split`, `normalizeMultiSelectAnswerValues`.

SHA-256 do trecho: `6146eee6f0b9bf884882cf6354e6ddc5e8de8bb1e9b6555b7acda3e797ef61a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
