# `reportEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:2336-2356](../../../../../reference/runtime/sand-eval-runner.cjs#L2336-L2356) | `FunctionDeclaration` | não | `ctx, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:2336-2356](../../../../../reference/runtime/sand-eval-runner.cjs#L2336-L2356) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:2336

Chamadas escritas diretamente neste corpo: `Date.now`, `context.active`, `copyInheritableAttributes`, `ctx.get`, `eventSpan.end`, `eventSpan.setAttribute`, `getSpan2`, `getTracer`, `rootSpan.setAttribute`, `trace.setSpan`, `tracer.startSpan`.

SHA-256 do trecho: `b1c42f607697fc413550ccae903505de48ece45f843ed331686edf57963f4a2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
