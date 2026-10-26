# `matchesPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484423-484425](../../../../../../reference/runtime/sand-eval-runner.cjs#L484423-L484425) | `FunctionDeclaration` | não | `criteria, pathname` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484423-484425](../../../../../../reference/runtime/sand-eval-runner.cjs#L484423-L484425) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484423

Chamadas escritas diretamente neste corpo: `criteria.equals.includes`, `criteria.includes.some`, `criteria.prefix.some`.

SHA-256 do trecho: `215d44dda740c7de534eeeaf2a511675a9a8d7de66e601e0c206d737e6354f1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
