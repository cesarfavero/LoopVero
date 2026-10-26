# `shouldSampleSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/send-trace.ts` · [README do módulo](../../../../../modules/shared/observability/send-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528679-528683](../../../../../../reference/runtime/sand-eval-runner.cjs#L528679-L528683) | `FunctionDeclaration` | não | `ratio = SEND_TRACE_SAMPLE_RATIO` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528679-528683](../../../../../../reference/runtime/sand-eval-runner.cjs#L528679-L528683) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:528679

Chamadas escritas diretamente neste corpo: `Math.random`.

SHA-256 do trecho: `45c6059bda8ad39b9883470be9f4fc9755172fe4c4801ae1c07c202d6ae9ceed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
