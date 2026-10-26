# `withSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225791-225812](../../../../../reference/runtime/host-main.cjs#L225791-L225812) | `FunctionDeclaration` | não | `ctx, options2` |
| [evaluation:2279-2300](../../../../../reference/runtime/sand-eval-runner.cjs#L2279-L2300) | `FunctionDeclaration` | não | `ctx, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225791-225812](../../../../../reference/runtime/host-main.cjs#L225791-L225812) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2279-2300](../../../../../reference/runtime/sand-eval-runner.cjs#L2279-L2300) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:225791

Chamadas escritas diretamente neste corpo: `.with`, `Date.now`, `context.active`, `copyInheritableAttributes`, `ctx.get`, `ctx.with`, `ctxWith.with`, `getTracer`, `isChildSpanSuppressed`, `resolveSpanName`, `trace.setSpan`, `tracer.startSpan`.

Alvos de atribuição ou incremento: `ctxWith`, `span`.

SHA-256 do trecho: `3bf79449b9cdedbf2fb83e1d623d324c043031f32c8ccecbb65bb8242cd10108`.

### evaluation:2279

Chamadas escritas diretamente neste corpo: `.with`, `Date.now`, `context.active`, `copyInheritableAttributes`, `ctx.get`, `ctx.with`, `ctxWith.with`, `getTracer`, `isChildSpanSuppressed`, `resolveSpanName`, `trace.setSpan`, `tracer.startSpan`.

Alvos de atribuição ou incremento: `ctxWith`, `span`.

SHA-256 do trecho: `3bf79449b9cdedbf2fb83e1d623d324c043031f32c8ccecbb65bb8242cd10108`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
