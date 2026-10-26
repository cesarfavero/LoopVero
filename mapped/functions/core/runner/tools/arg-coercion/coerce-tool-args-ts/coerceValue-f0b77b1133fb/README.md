# `coerceValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724898-724946](../../../../../../../../reference/runtime/host-main.cjs#L724898-L724946) | `FunctionDeclaration` | não | `schema3, value` |
| [evaluation:479861-479909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479861-L479909) | `FunctionDeclaration` | não | `schema3, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724898-724946](../../../../../../../../reference/runtime/host-main.cjs#L724898-L724946) | 17 | 1 | 0 | 14 | 0 | 0 |
| [evaluation:479861-479909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479861-L479909) | 17 | 1 | 0 | 14 | 0 | 0 |

### host:724898

Chamadas escritas diretamente neste corpo: `Array.isArray`, `coerceEntries`, `coerceItems`, `coerceString`, `coerceValue`, `isUnknownRecord2`, `option.safeParse`, `s3.innerType`, `s3.optionsMap.get`, `unwrap`.

SHA-256 do trecho: `2bdb7cb32d38d8e9b448ca55f3dd33664880613f3078e54197b89b8d1b5d4f37`.

### evaluation:479861

Chamadas escritas diretamente neste corpo: `Array.isArray`, `coerceEntries`, `coerceItems`, `coerceString`, `coerceValue`, `isUnknownRecord2`, `option.safeParse`, `s3.innerType`, `s3.optionsMap.get`, `unwrap`.

SHA-256 do trecho: `b226caf7b9837d94a275cac3520ed3380519a129548c8900c443396431756fc6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
