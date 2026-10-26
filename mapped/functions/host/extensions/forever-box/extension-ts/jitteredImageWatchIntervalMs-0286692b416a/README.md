# `jitteredImageWatchIntervalMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681136-681140](../../../../../../../reference/runtime/host-main.cjs#L681136-L681140) | `FunctionDeclaration` | não | `{ intervalMs, ratio }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681136-681140](../../../../../../../reference/runtime/host-main.cjs#L681136-L681140) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:681136

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.random`, `Math.round`.

SHA-256 do trecho: `e3155b8815dcf19fa9e40e6fb333a93e9dd093a6cc34497a8bec737b63427519`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
