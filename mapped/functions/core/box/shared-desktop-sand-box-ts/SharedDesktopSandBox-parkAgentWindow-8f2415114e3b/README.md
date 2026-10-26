# `SharedDesktopSandBox.parkAgentWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555128-555148](../../../../../../reference/runtime/host-main.cjs#L555128-L555148) | `method` | sim | `ctx, agentId, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555128-555148](../../../../../../reference/runtime/host-main.cjs#L555128-L555148) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:555128

Chamadas escritas diretamente neste corpo: `this.inAgentQueue`.

SHA-256 do trecho: `fac90ec324991583774089b14a54ca295935f8812cdc0f2fd9e08b1c5546e8bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
