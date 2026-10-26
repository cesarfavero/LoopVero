# `SharedDesktopSandBox.migrateLegacyPrimarySeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554778-554785](../../../../../../reference/runtime/host-main.cjs#L554778-L554785) | `method` | não | `agentId, assigned` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554778-554785](../../../../../../reference/runtime/host-main.cjs#L554778-L554785) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:554778

Chamadas escritas diretamente neste corpo: `isPrimaryWindowIndex`, `this.agentWindows.get`, `this.takeFreeForkIndex`.

SHA-256 do trecho: `cb157a87bda8c08f9f2244ae9561c155b1ae34aeff4cbd381e3543bc3bb7f7b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
