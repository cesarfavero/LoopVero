# `WebSocketCdpConnection.send`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543067-543096](../../../../../../../reference/runtime/host-main.cjs#L543067-L543096) | `method` | sim | `method, params = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543067-543096](../../../../../../../reference/runtime/host-main.cjs#L543067-L543096) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:543067

Chamadas escritas diretamente neste corpo: `CDP_COMMAND_DEADLINE.run`.

SHA-256 do trecho: `63a2f54fe9160032ff78ff30208bd8103282a5bcd182f14a276c8990fa997c33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
