# `carryOverProposalOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-carry-over-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-carry-over-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535769-535786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535769-L535786) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535769-535786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535769-L535786) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:535769

Chamadas escritas diretamente neste corpo: `.filter`, `.slice`, `args.secrets.map`, `firstPickOfEachName`, `new Set`, `plugins.map`, `secrets.map`, `suggestions.map`.

Alvos de atribuição ou incremento: `reasons[computed]`.

SHA-256 do trecho: `06fc5f4bca0f4ed314a541f78c84a3d1cc7ff452fa08d0e0d2bbef67a12ee662`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
