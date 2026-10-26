# `SharedDesktopSandBox.holdsSeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554883-554885](../../../../../../reference/runtime/host-main.cjs#L554883-L554885) | `method` | não | `agentId, windowIndex, ownerToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554883-554885](../../../../../../reference/runtime/host-main.cjs#L554883-L554885) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:554883

Chamadas escritas diretamente neste corpo: `this.agentWindowTokens.get`, `this.agentWindows.get`.

SHA-256 do trecho: `431fc0fc0c41fc20f0f08bc443550a7b551ad0966cdc8ddf0fd6a240a3149241`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
