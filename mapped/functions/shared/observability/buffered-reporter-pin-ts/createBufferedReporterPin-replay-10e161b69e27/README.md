# `createBufferedReporterPin/replay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/buffered-reporter-pin.ts` · [README do módulo](../../../../../modules/shared/observability/buffered-reporter-pin-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430993-431003](../../../../../../reference/runtime/host-main.cjs#L430993-L431003) | `ArrowFunctionExpression` | não | `next, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430993-431003](../../../../../../reference/runtime/host-main.cjs#L430993-L431003) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:430993

Chamadas escritas diretamente neste corpo: `next`, `options2.onReplayFailure`.

SHA-256 do trecho: `3a51fd44857a474fac5a3e3f8c5773df8e8bf13184782459dec58ce06db2b577`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
