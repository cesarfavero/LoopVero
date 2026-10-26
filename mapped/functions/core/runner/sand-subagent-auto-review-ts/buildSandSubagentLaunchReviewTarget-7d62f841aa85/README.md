# `buildSandSubagentLaunchReviewTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/sand-subagent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:581112-581122](../../../../../../reference/runtime/sand-eval-runner.cjs#L581112-L581122) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:581112-581122](../../../../../../reference/runtime/sand-eval-runner.cjs#L581112-L581122) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:581112

Chamadas escritas diretamente neste corpo: `args.prompt.trim`.

SHA-256 do trecho: `6b561b24f2e94d871efcc9827377ac79d166e5a7d64cb10e204c34c4dfbbff85`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
