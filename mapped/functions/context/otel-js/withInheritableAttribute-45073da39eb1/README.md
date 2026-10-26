# `withInheritableAttribute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:2307-2317](../../../../../reference/runtime/sand-eval-runner.cjs#L2307-L2317) | `FunctionDeclaration` | não | `ctx, key, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:2307-2317](../../../../../reference/runtime/sand-eval-runner.cjs#L2307-L2317) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:2307

Chamadas escritas diretamente neste corpo: `ctx.get`, `ctx.with`, `getSpan2`, `span.setAttribute`.

SHA-256 do trecho: `a3f34de2badfa2445295f4f6f11a36c1a7827ffcf2fb2eb0d870eb922e985bd5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
