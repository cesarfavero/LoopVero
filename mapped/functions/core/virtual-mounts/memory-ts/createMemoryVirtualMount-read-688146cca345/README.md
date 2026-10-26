# `createMemoryVirtualMount/read`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769659-769677](../../../../../../reference/runtime/host-main.cjs#L769659-L769677) | `ArrowFunctionExpression` | sim | `_ctx, _access, path33, window2 = {}` |
| [evaluation:565328-565346](../../../../../../reference/runtime/sand-eval-runner.cjs#L565328-L565346) | `ArrowFunctionExpression` | sim | `_ctx, _access, path33, window2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769659-769677](../../../../../../reference/runtime/host-main.cjs#L769659-L769677) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:565328-565346](../../../../../../reference/runtime/sand-eval-runner.cjs#L565328-L565346) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:769659

Chamadas escritas diretamente neste corpo: `.filter`, `candidates.filter`, `collectMemoryCandidates`, `path33.split`, `refused2`, `scopesUnder`, `selected.map`, `windowOf2`.

SHA-256 do trecho: `d7e51e1ac16c2b33a85d55c49ef3f0af96d792c107be4846018aa23d43b8328a`.

### evaluation:565328

Chamadas escritas diretamente neste corpo: `.filter`, `candidates.filter`, `collectMemoryCandidates`, `path33.split`, `refused`, `scopesUnder`, `selected.map`, `windowOf`.

SHA-256 do trecho: `1876d0d187ef62c60c8dd6dccf02c39b9f4d2165e597d8a96c36f35d25bdff1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
