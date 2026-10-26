# `coerceString`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724882-724890](../../../../../../../../reference/runtime/host-main.cjs#L724882-L724890) | `FunctionDeclaration` | não | `schema3, value` |
| [evaluation:479845-479853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479845-L479853) | `FunctionDeclaration` | não | `schema3, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724882-724890](../../../../../../../../reference/runtime/host-main.cjs#L724882-L724890) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479845-479853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479845-L479853) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724882

Chamadas escritas diretamente neste corpo: `coerceStringArg`, `kinds.has`, `kindsOf2`, `new Set`, `schema3.isNullable`.

SHA-256 do trecho: `5764de218322628336b2119ef31f74b93f752064c71eea51bf2ada663b3f05aa`.

### evaluation:479845

Chamadas escritas diretamente neste corpo: `coerceStringArg`, `kinds.has`, `kindsOf2`, `new Set`, `schema3.isNullable`.

SHA-256 do trecho: `28363fda7cbaba4a2d6c0ca85c677d39ce8c2e3ddefdf3b9d4bfa1b69884ada1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
