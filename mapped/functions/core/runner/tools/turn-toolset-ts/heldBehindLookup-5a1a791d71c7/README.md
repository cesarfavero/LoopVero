# `heldBehindLookup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-toolset.ts` · [README do módulo](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582662-582665](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582662-L582665) | `FunctionDeclaration` | não | `tool, lookupOnly` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582662-582665](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582662-L582665) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582662

Chamadas escritas diretamente neste corpo: `GROK_BOT_TOOL_ID_BY_MODEL_NAME.get`, `lookupOnly.has`.

SHA-256 do trecho: `3463ff1e92285853c240bc0d4b43161e8e3ae63d4bee491eac80246e811ab2c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
