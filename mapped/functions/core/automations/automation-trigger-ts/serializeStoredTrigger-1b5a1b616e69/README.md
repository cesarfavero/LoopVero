# `serializeStoredTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716436-716444](../../../../../../reference/runtime/host-main.cjs#L716436-L716444) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:528119-528127](../../../../../../reference/runtime/sand-eval-runner.cjs#L528119-L528127) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716436-716444](../../../../../../reference/runtime/host-main.cjs#L716436-L716444) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:528119-528127](../../../../../../reference/runtime/sand-eval-runner.cjs#L528119-L528127) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:716436

Chamadas escritas diretamente neste corpo: `serializeTriggerMember`, `trigger2.listeners.map`.

SHA-256 do trecho: `78b74e04b37f88326b7b0b143d48b6a8b27e884679422fb0ebedb38c4a66728f`.

### evaluation:528119

Chamadas escritas diretamente neste corpo: `serializeTriggerMember`, `trigger.listeners.map`.

SHA-256 do trecho: `0a6b666ccf81dae1e17b24bf1b8687bf01630f0ef0c11afb82173a9e2dcff901`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
