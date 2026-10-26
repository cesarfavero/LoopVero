# `SharedDesktopSandBox.freeDeletedAgentSeatsOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554430-554440](../../../../../../reference/runtime/host-main.cjs#L554430-L554440) | `method` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554430-554440](../../../../../../reference/runtime/host-main.cjs#L554430-L554440) | 2 | 0 | 1 | 0 | 1 | 1 |

### host:554430

Chamadas escritas diretamente neste corpo: `this.freeDeletedAgentSeats`.

Alvos de atribuição ou incremento: `swept`, `this.deletedAgentSeatsFreed`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `51e663617c7b0994cfc0b68f0f7f050e1c1d27d2a72f4cfc5f6d4ccb10602c76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
