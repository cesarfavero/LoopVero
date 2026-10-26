# `createOrbitDaemonSessionController/reportFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706097-706101](../../../../../../../reference/runtime/host-main.cjs#L706097-L706101) | `FunctionDeclaration` | não | `stage, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706097-706101](../../../../../../../reference/runtime/host-main.cjs#L706097-L706101) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:706097

Chamadas escritas diretamente neste corpo: `ConnectError.from`, `deps.log`, `errorLogTag`.

SHA-256 do trecho: `c3b22c8d1048dd5473ab076e1397fceaa85102b92e86e07bf01d067412564833`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
