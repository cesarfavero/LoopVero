# `initialImageWatchDelayMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681132-681135](../../../../../../../reference/runtime/host-main.cjs#L681132-L681135) | `FunctionDeclaration` | não | `{ intervalMs, ratio }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681132-681135](../../../../../../../reference/runtime/host-main.cjs#L681132-L681135) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:681132

Chamadas escritas diretamente neste corpo: `Math.random`, `Math.round`.

SHA-256 do trecho: `42691cb140b96958327f7b28cb78d4e804597a078dcac7344ea92dd048ef8661`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
