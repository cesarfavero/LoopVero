# `getSpanContextData`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225819-225836](../../../../../reference/runtime/host-main.cjs#L225819-L225836) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:2318-2335](../../../../../reference/runtime/sand-eval-runner.cjs#L2318-L2335) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225819-225836](../../../../../reference/runtime/host-main.cjs#L225819-L225836) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:2318-2335](../../../../../reference/runtime/sand-eval-runner.cjs#L2318-L2335) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:225819

Chamadas escritas diretamente neste corpo: `ctx.get`, `getSpan2`, `sc.traceState.toString`, `span.spanContext`.

SHA-256 do trecho: `5b8b860131c65f4a450635a02abde61592b8d2a770662592c71fc29ff8a6ba5e`.

### evaluation:2318

Chamadas escritas diretamente neste corpo: `ctx.get`, `getSpan2`, `sc.traceState.toString`, `span.spanContext`.

SHA-256 do trecho: `5b8b860131c65f4a450635a02abde61592b8d2a770662592c71fc29ff8a6ba5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
