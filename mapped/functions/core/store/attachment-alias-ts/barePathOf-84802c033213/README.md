# `barePathOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/store/attachment-alias.ts` · [README do módulo](../../../../../modules/core/store/attachment-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759596-759609](../../../../../../reference/runtime/host-main.cjs#L759596-L759609) | `FunctionDeclaration` | não | `path33` |
| [evaluation:549764-549777](../../../../../../reference/runtime/sand-eval-runner.cjs#L549764-L549777) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759596-759609](../../../../../../reference/runtime/host-main.cjs#L759596-L759609) | 3 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:549764-549777](../../../../../../reference/runtime/sand-eval-runner.cjs#L549764-L549777) | 3 | 0 | 0 | 5 | 0 | 1 |

### host:759596

Chamadas escritas diretamente neste corpo: `ENCODED_SEPARATOR.test`, `new URL`, `path33.includes`, `path33.startsWith`, `platformIndependentPosixPathOf`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `02915bed41b1a530c0f1dc141457cd99787346d3a415a9195166ec57e2962e0b`.

### evaluation:549764

Chamadas escritas diretamente neste corpo: `ENCODED_SEPARATOR.test`, `new URL`, `path33.includes`, `path33.startsWith`, `platformIndependentPosixPathOf`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `02915bed41b1a530c0f1dc141457cd99787346d3a415a9195166ec57e2962e0b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
