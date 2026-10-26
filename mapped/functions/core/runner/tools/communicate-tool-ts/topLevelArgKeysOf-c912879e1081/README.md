# `topLevelArgKeysOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725084-725088](../../../../../../../reference/runtime/host-main.cjs#L725084-L725088) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:480055-480059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480055-L480059) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725084-725088](../../../../../../../reference/runtime/host-main.cjs#L725084-L725088) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:480055-480059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480055-L480059) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:725084

Chamadas escritas diretamente neste corpo: `Object.keys`, `current2.innerType`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `99a2f0b0dea034be1639bdb5e8909a47e56a46bf10f4a3d5cf24da8c73eb123e`.

### evaluation:480055

Chamadas escritas diretamente neste corpo: `Object.keys`, `current2.innerType`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `c069cd795262e7adbffcaf804856dc5e9d299fdc4c39d74a2ecee2e6de2cc028`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
