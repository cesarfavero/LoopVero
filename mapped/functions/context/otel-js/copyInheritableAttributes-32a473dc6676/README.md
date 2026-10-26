# `copyInheritableAttributes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225767-225775](../../../../../reference/runtime/host-main.cjs#L225767-L225775) | `FunctionDeclaration` | não | `span, ctx` |
| [evaluation:2255-2263](../../../../../reference/runtime/sand-eval-runner.cjs#L2255-L2263) | `FunctionDeclaration` | não | `span, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225767-225775](../../../../../reference/runtime/host-main.cjs#L225767-L225775) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:2255-2263](../../../../../reference/runtime/sand-eval-runner.cjs#L2255-L2263) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:225767

Chamadas escritas diretamente neste corpo: `ctx.get`, `span.setAttribute`.

SHA-256 do trecho: `87d5acd7678ab5947ddf980e69a122939faccaa3e151c9d79ec9c865742aa513`.

### evaluation:2255

Chamadas escritas diretamente neste corpo: `ctx.get`, `span.setAttribute`.

SHA-256 do trecho: `87d5acd7678ab5947ddf980e69a122939faccaa3e151c9d79ec9c865742aa513`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
