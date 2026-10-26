# `OnePasswordBrokerBridge.createAccessRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550139-550160](../../../../../../../reference/runtime/host-main.cjs#L550139-L550160) | `method` | não | `cdpPort, session, request5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550139-550160](../../../../../../../reference/runtime/host-main.cjs#L550139-L550160) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:550139

Chamadas escritas diretamente neste corpo: `request5.entries.map`, `this.call`.

SHA-256 do trecho: `4700c0518d7cb7b05b4012eb2c397d1fbdf3c8babc237eeb8ee2ded304d22a0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
