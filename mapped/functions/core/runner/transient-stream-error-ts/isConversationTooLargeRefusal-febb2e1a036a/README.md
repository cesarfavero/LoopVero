# `isConversationTooLargeRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736267-736269](../../../../../../reference/runtime/host-main.cjs#L736267-L736269) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589959-589961](../../../../../../reference/runtime/sand-eval-runner.cjs#L589959-L589961) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736267-736269](../../../../../../reference/runtime/host-main.cjs#L736267-L736269) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589959-589961](../../../../../../reference/runtime/sand-eval-runner.cjs#L589959-L589961) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736267

Chamadas escritas diretamente neste corpo: `hasConversationTooLargeSignal`, `new Set`.

SHA-256 do trecho: `05df710489c1cfc79c141e0d4ec694ff709b871a4780ff3dbd025749a5523c4b`.

### evaluation:589959

Chamadas escritas diretamente neste corpo: `hasConversationTooLargeSignal`, `new Set`.

SHA-256 do trecho: `cdb30fd66d6e00c47455ab6b6fd872df41bc68166565b0cc57e1b858080ddab5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
