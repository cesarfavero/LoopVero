# `webHostOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-takeover.ts` · [README do módulo](../../../../../modules/core/box/box-takeover-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775927-775936](../../../../../../reference/runtime/host-main.cjs#L775927-L775936) | `FunctionDeclaration` | não | `raw` |
| [evaluation:575584-575593](../../../../../../reference/runtime/sand-eval-runner.cjs#L575584-L575593) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775927-775936](../../../../../../reference/runtime/host-main.cjs#L775927-L775936) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:575584-575593](../../../../../../reference/runtime/sand-eval-runner.cjs#L575584-L575593) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:775927

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `87efca2f81e68dce4933e14f82bf9557c78c02eee3d690345b23be22f6a71932`.

### evaluation:575584

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `87efca2f81e68dce4933e14f82bf9557c78c02eee3d690345b23be22f6a71932`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
