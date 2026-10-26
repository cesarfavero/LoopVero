# `coerceToolArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724950-724952](../../../../../../../../reference/runtime/host-main.cjs#L724950-L724952) | `FunctionDeclaration` | não | `schema3, value` |
| [evaluation:479913-479915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479913-L479915) | `FunctionDeclaration` | não | `schema3, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724950-724952](../../../../../../../../reference/runtime/host-main.cjs#L724950-L724952) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479913-479915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479913-L479915) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724950

Chamadas escritas diretamente neste corpo: `coerceValue`, `reportCoercion`.

SHA-256 do trecho: `5837e43bc993c0deebc99ced4bb04d0290327e54718a876cd19c0accb5c0e982`.

### evaluation:479913

Chamadas escritas diretamente neste corpo: `coerceValue`, `reportCoercion`.

SHA-256 do trecho: `5837e43bc993c0deebc99ced4bb04d0290327e54718a876cd19c0accb5c0e982`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
