# `createRequestVirtualCardTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/virtual-card-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775382-775386](../../../../../../../reference/runtime/host-main.cjs#L775382-L775386) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:575027-575031](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575027-L575031) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775382-775386](../../../../../../../reference/runtime/host-main.cjs#L775382-L775386) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575027-575031](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575027-L575031) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:775382

Chamadas escritas diretamente neste corpo: `noteToolTargetHost`, `parseMerchantUrl`, `runRequestVirtualCard`.

SHA-256 do trecho: `529bf4fd6e2a206ca378f22307479d80fc1c86058f52d9d039147a233bafe746`.

### evaluation:575027

Chamadas escritas diretamente neste corpo: `noteToolTargetHost`, `parseMerchantUrl`, `runRequestVirtualCard`.

SHA-256 do trecho: `529bf4fd6e2a206ca378f22307479d80fc1c86058f52d9d039147a233bafe746`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
