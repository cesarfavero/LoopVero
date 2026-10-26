# `publishAppRejectionMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-publish-app.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-publish-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566973-566997](../../../../../../reference/runtime/sand-eval-runner.cjs#L566973-L566997) | `FunctionDeclaration` | não | `error63, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566973-566997](../../../../../../reference/runtime/sand-eval-runner.cjs#L566973-L566997) | 13 | 0 | 0 | 8 | 0 | 0 |

### evaluation:566973

Chamadas escritas diretamente neste corpo: `/does not have a running pod/.test`, `[computed].details.detail.trim`, `error63.findDetails`, `error63.rawMessage.trim`.

SHA-256 do trecho: `888f44b17f1b567c793207808313ce09467121e53b512270bf390a079981d14c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
