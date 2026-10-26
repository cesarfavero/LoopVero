# `_BackendConnectErrors.usageLimitEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-run-error.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736706-736713](../../../../../../../reference/runtime/host-main.cjs#L736706-L736713) | `method` | não | `connectError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736706-736713](../../../../../../../reference/runtime/host-main.cjs#L736706-L736713) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:736706

Chamadas escritas diretamente neste corpo: `connectError.findDetails`, `isSandUsageLimitReason`.

SHA-256 do trecho: `d2ee2ab21aceaa2bfc718014bfb75e527b039190c89621d9cb814abf104f8e0b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
