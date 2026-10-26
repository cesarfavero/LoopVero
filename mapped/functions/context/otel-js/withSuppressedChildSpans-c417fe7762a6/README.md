# `withSuppressedChildSpans`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225816-225818](../../../../../reference/runtime/host-main.cjs#L225816-L225818) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:2304-2306](../../../../../reference/runtime/sand-eval-runner.cjs#L2304-L2306) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225816-225818](../../../../../reference/runtime/host-main.cjs#L225816-L225818) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2304-2306](../../../../../reference/runtime/sand-eval-runner.cjs#L2304-L2306) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225816

Chamadas escritas diretamente neste corpo: `ctx.with`.

SHA-256 do trecho: `dc1de5fa8b668da6ee3a499399eee267a5de7af790b071de2835c0b17877f77b`.

### evaluation:2304

Chamadas escritas diretamente neste corpo: `ctx.with`.

SHA-256 do trecho: `dc1de5fa8b668da6ee3a499399eee267a5de7af790b071de2835c0b17877f77b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
