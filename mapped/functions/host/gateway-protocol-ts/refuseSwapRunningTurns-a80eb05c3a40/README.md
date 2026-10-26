# `refuseSwapRunningTurns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-protocol.ts` · [README do módulo](../../../../modules/host/gateway-protocol-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490032-490034](../../../../../reference/runtime/host-main.cjs#L490032-L490034) | `FunctionDeclaration` | não | `runningTurns` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490032-490034](../../../../../reference/runtime/host-main.cjs#L490032-L490034) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490032

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `088f0f8f977774d395a41219776201b0bb4b90f62fd4ae71a991f18cab0daed1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
