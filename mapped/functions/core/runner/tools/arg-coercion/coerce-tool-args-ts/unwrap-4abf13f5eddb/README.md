# `unwrap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724834-724853](../../../../../../../../reference/runtime/host-main.cjs#L724834-L724853) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:479797-479816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479797-L479816) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724834-724853](../../../../../../../../reference/runtime/host-main.cjs#L724834-L724853) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:479797-479816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479797-L479816) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:724834

Chamadas escritas diretamente neste corpo: `current2.innerType`, `current2.removeCatch`, `current2.removeDefault`, `current2.unwrap`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `c240c7980b505b52c9b69c8819d1753510b192ac995cf5e30c57911f679ee512`.

### evaluation:479797

Chamadas escritas diretamente neste corpo: `current2.innerType`, `current2.removeCatch`, `current2.removeDefault`, `current2.unwrap`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `efa228581ed60db23b10cfb17a79af24c7d6680f0f71893eca76978c594118b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
