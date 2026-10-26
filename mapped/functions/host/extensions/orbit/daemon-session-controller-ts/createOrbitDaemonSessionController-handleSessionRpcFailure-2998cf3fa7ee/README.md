# `createOrbitDaemonSessionController/handleSessionRpcFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705907-705921](../../../../../../../reference/runtime/host-main.cjs#L705907-L705921) | `FunctionDeclaration` | não | `openSession2, stage, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705907-705921](../../../../../../../reference/runtime/host-main.cjs#L705907-L705921) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:705907

Chamadas escritas diretamente neste corpo: `beginRetirement`, `isLostSessionError`, `isProtocolDivergence`, `reportFailure`.

SHA-256 do trecho: `1117e81541712b02ba0a75083dae69d953659db7a93dc23273f3ef1bec5137e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
