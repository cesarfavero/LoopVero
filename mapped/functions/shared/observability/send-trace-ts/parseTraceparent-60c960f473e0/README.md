# `parseTraceparent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/send-trace.ts` · [README do módulo](../../../../../modules/shared/observability/send-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:484107-484119](../../../../../../reference/runtime/host-main.cjs#L484107-L484119) | `FunctionDeclaration` | não | `traceparent` |
| [evaluation:528694-528706](../../../../../../reference/runtime/sand-eval-runner.cjs#L528694-L528706) | `FunctionDeclaration` | não | `traceparent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484107-484119](../../../../../../reference/runtime/host-main.cjs#L484107-L484119) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:528694-528706](../../../../../../reference/runtime/sand-eval-runner.cjs#L528694-L528706) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:484107

Chamadas escritas diretamente neste corpo: `.split`, `HEX_FLAGS.test`, `HEX_SPAN_ID.test`, `HEX_TRACE_ID.test`, `Number.isNaN`, `Number.parseInt`, `traceparent.trim`.

SHA-256 do trecho: `13548de5213b25d265594f9fd5fd6924ed70041ee97e786e0c6902d614a58a98`.

### evaluation:528694

Chamadas escritas diretamente neste corpo: `.split`, `HEX_FLAGS.test`, `HEX_SPAN_ID.test`, `HEX_TRACE_ID.test`, `Number.isNaN`, `Number.parseInt`, `traceparent.trim`.

SHA-256 do trecho: `13548de5213b25d265594f9fd5fd6924ed70041ee97e786e0c6902d614a58a98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
