# `reportMessagesToolUse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778187-778193](../../../../../../../reference/runtime/host-main.cjs#L778187-L778193) | `FunctionDeclaration` | não | `ctx, report, makeUse` |
| [evaluation:577922-577928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577922-L577928) | `FunctionDeclaration` | não | `ctx, report, makeUse` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778187-778193](../../../../../../../reference/runtime/host-main.cjs#L778187-L778193) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:577922-577928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577922-L577928) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:778187

Chamadas escritas diretamente neste corpo: `errorLogTag`, `logger124.warn`, `makeUse`, `report`.

SHA-256 do trecho: `d282259cfccc4a2610ed5b3d3f3c2e87ccfb855e3dbc190d95fc0f6a4fb93f52`.

### evaluation:577922

Chamadas escritas diretamente neste corpo: `errorLogTag`, `logger97.warn`, `makeUse`, `report`.

SHA-256 do trecho: `797fd14f47b7752b9587075a8c02793ffc66118f5defd63119e8a84a2cddd90a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
