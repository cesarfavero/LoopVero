# `buildReplyContextNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532488-532494](../../../../../../reference/runtime/sand-eval-runner.cjs#L532488-L532494) | `FunctionDeclaration` | não | `replyContext` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532488-532494](../../../../../../reference/runtime/sand-eval-runner.cjs#L532488-L532494) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:532488

Chamadas escritas diretamente neste corpo: `replyContext.quote.trim`, `replyContext.targetId.trim`.

SHA-256 do trecho: `23c968faae68ba01a38cf16641490530fba1d38dfe98c3df1601a5fd03051083`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
