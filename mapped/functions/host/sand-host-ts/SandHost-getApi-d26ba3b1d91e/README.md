# `SandHost.getApi`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786626-786638](../../../../../reference/runtime/host-main.cjs#L786626-L786638) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786626-786638](../../../../../reference/runtime/host-main.cjs#L786626-L786638) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786626

Chamadas escritas diretamente neste corpo: `createHostGatewayApi`, `this.requireHostExtensions`, `this.requireRosterBookkeeping`.

SHA-256 do trecho: `9911768bc936123fbe03dd36c4e71a094c45363c071577b6d350a0e966662c2a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
