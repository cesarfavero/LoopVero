# `schemaShaOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/frozen-tool-descriptions-middleware.ts` · [README do módulo](../../../../../modules/core/runner/frozen-tool-descriptions-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586582-586596](../../../../../../reference/runtime/sand-eval-runner.cjs#L586582-L586596) | `FunctionDeclaration` | não | `tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586582-586596](../../../../../../reference/runtime/sand-eval-runner.cjs#L586582-L586596) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:586582

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `isUnknownRecord2`, `schemaShaByParameters.get`, `schemaShaByParameters.set`, `sha256HexOfText`.

Alvos de atribuição ou incremento: `serialized`.

SHA-256 do trecho: `a2bf2891235c13aabd85fd59684fda2d485227a5603bf3eee39321b0f8f8140f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
